import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as ScreenOrientation from 'expo-screen-orientation';
import Constants from 'expo-constants';
import vocabulary, { TextStyle, VocabularyItem } from './vocabulary';
import { electManyWeighted, electManyExceptFor, electOne, randomInsert } from '../randomization';
import { ImageSelectionGameStats, mutateStats, getStats } from './persistence';
import { ImagesSection } from './ImagesSection';
import { Routes } from './../Routes';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { isOrientationPortrait } from './../utils';

type Props = NativeStackScreenProps<Routes, 'ImageSelectionGame'>;

const questionsPerRun = 10;
const imagesPerQuestion = 6;
let run: {
  set: VocabularyItem[];
  answer: VocabularyItem;
  images: any[];
}[] | null = null;

const ImageSelectionGame = ({ navigation }: Props) => {
  run = run || generateRun(questionsPerRun);
  var [runIndex, setRunIndex] = useState(0);
  var { set, answer, images } = run[runIndex];
  var [isPerfectWord, setIsPerfectWord] = useState(true);
  var [isPerfectRun, setIsPerfectRun] = useState(true);
  var [newWordsSeen, setNewWordsSeen] = useState(0);
  var [isPortrait, setIsPortrait] = useState(true);

  useEffect(() => {
    ScreenOrientation.getOrientationAsync()
      .then(orientation => setIsPortrait(isOrientationPortrait(orientation)))

    const subscription = ScreenOrientation.addOrientationChangeListener(event =>
      setIsPortrait(isOrientationPortrait(event.orientationInfo.orientation)))
    return () => ScreenOrientation.removeOrientationChangeListener(subscription);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={{
        ...styles.definition,
        ...(isPortrait ? styles.definitionPortrait : styles.definitionLandscape),
      }}>
        {answer.entry.heading.map((textPart, index) => {
          return (<Text key={index} style={textPart.style === TextStyle.stressed ? styles.stressed : {}}>{textPart.text}</Text>)
        })}
      </Text>
      <ImagesSection
        images={images}
        answerIndex={set.indexOf(answer)}
        onCorrectChosen={onCorrectChosen}
        onWrongChosen={onWrongChosen}
        isPortrait={isPortrait}
      />
    </View>
  );

  function onCorrectChosen() {

    const nextRunIndex = runIndex + 1;
    const runCompleted = nextRunIndex === run.length;

    mutateStats(stats => {
      const result = ImageSelectionGameStats.fromOther(stats);
      result.attemptClicks++;
      result.successClicks++;
      if (!result.seenWords.includes(answer.key)) {
        result.seenWords.push(answer.key);
        newWordsSeen++;
        setNewWordsSeen(newWordsSeen);
      }
      if (isPerfectWord && !result.perfectedWords.includes(answer.key))
        result.perfectedWords.push(answer.key);
      if (runCompleted)
        result.runsCompleted++;
      return result;
    });

    setIsPerfectWord(true);

    if (runCompleted) {
      run = generateRun();
      navigation.replace("ImageSelectionCompletion", { isPerfect: isPerfectRun, newWordsSeen });
    }
    else {
      setRunIndex(runIndex + 1);
    }
  }

  function onWrongChosen() {
    setIsPerfectWord(false);
    setIsPerfectRun(false);
    mutateStats(stats => {
      const result = ImageSelectionGameStats.fromOther(stats);
      result.attemptClicks++;
      return result;
    })
  }
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'beige',
  },
  definition: {
    textAlign: 'center',
    textAlignVertical: 'center',
    height: '9%',
    fontSize: 20,
  },
  definitionPortrait: {
    marginTop: Constants.statusBarHeight,
    fontSize: 24,
  },
  definitionLandscape: {
    fontSize: 16,
  },
  stressed: {
    color: 'red',
  },
});

function generateRun(questionsNumber: number = questionsPerRun, imagesNumber: number = imagesPerQuestion) {
  var stats = getStats();
  const answers = electManyWeighted(vocabulary, vocabularyItemWeight, questionsNumber);
  return answers.map(answer => {
    var set = electManyExceptFor(vocabulary, exclusionChecker(answer), imagesPerQuestion - 1);
    randomInsert(set, answer);
    return { set, answer, images: set.map(x => electOne(x.images)) };
  });

  function vocabularyItemWeight(item: VocabularyItem) : number {
    // show less of perfected words
    if (stats.perfectedWords.includes(item.key))
      return 1;
    // but a bit more of attempted but not perfected ones 
    if (stats.seenWords.includes(item.key))
      3;
    return 2;
  }

  function exclusionChecker(answer: VocabularyItem): (takenItems: VocabularyItem[], item: VocabularyItem) => boolean {
    const answerWords = [answer.canonical];
    answerWords.push(...(answer.exclusion || []));
    return (takenItems: VocabularyItem[], item: VocabularyItem) => {
      if (takenItems.includes(item))
        return false;
      if (answerWords.includes(item.canonical))
        return false;
      if (item.exclusion) {
        for (const word of item.exclusion) {
          if (answerWords.includes(word))
            return false;
        }
      }
      return true;
    }
  }
}

export default ImageSelectionGame;
