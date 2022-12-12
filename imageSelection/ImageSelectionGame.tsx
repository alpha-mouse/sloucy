import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as ScreenOrientation from 'expo-screen-orientation';
import vocabulary, { TextStyle } from './vocabulary';
import { electMany, electManyExceptFor, electOne, randomInsert } from '../randomization';
import { ImageSelectionGameStats, mutateStats } from './persistence';
import { ImagesSection } from './ImagesSection';
import { Routes } from './../Routes';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<Routes, 'ImageSelectionGame'>;

const questionsPerRun = 10;
let run = generateRun(questionsPerRun);

const ImageSelectionGame = ({ navigation }: Props) => {
  var [runIndex, setRunIndex] = useState(0);
  var { set, answer, images } = run[runIndex];
  var [isPerfect, setIsPerfect] = useState(true);
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
        height: isPortrait ? '9%' : '6%',
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
        setNewWordsSeen(newWordsSeen + 1);
      }
      if (isPerfect && !result.perfectedWords.includes(answer.key))
        result.perfectedWords.push(answer.key);
      if (runCompleted)
        result.runsCompleted++;
      return result;
    });

    if (runCompleted) {
      run = generateRun(questionsPerRun);
      navigation.replace("ImageSelectionCompletion", { isPerfect, newWordsSeen });
    }
    else {
      setRunIndex(runIndex + 1);
    }
  }

  function onWrongChosen() {
    setIsPerfect(false);
    mutateStats(stats => {
      const result = ImageSelectionGameStats.fromOther(stats);
      result.attemptClicks++;
      return result;
    })
  }

  function isOrientationPortrait(orientation: ScreenOrientation.Orientation) {
    return orientation === ScreenOrientation.Orientation.PORTRAIT_DOWN
      || orientation === ScreenOrientation.Orientation.PORTRAIT_UP
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column-reverse',
    height: '100%',
  },
  definition: {
    backgroundColor: 'beige',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
  },
  stressed: {
    color: 'red',
  },
});

function generateRun(questionsNumber: number) {
  const answers = electMany(vocabulary, questionsNumber);
  return answers.map(answer => {
    var set = electManyExceptFor(vocabulary, [answer], 5);
    randomInsert(set, answer);
    return { set, answer, images: set.map(x => electOne(x.images)) };
  });
}

export default ImageSelectionGame;
