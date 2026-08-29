import { useState } from 'react';
import { ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import vocabulary, { TextStyle, VocabularyItem } from './vocabulary';
import { electManyWeighted, electManyExceptFor, electOne, randomInsert } from '../randomization';
import { copyStats, mutateStats, getStats } from './persistence';
import { ImagesSection } from './ImagesSection';
import { Routes } from './../Routes';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Screen from './../components/Screen';
import ProgressBar from './../components/ProgressBar';
import { color, font, space } from './../theme';
import { useResponsiveFontSize, useIsPortrait } from './../utils';


type Props = NativeStackScreenProps<Routes, 'ImageSelectionGame'>;

const questionsPerRun = 10;
const imagesPerQuestion = 6;
let run: {
  set: VocabularyItem[];
  answer: VocabularyItem;
  images: ImageSourcePropType[];
}[] | null = null;

const ImageSelectionGame = ({ navigation }: Props) => {
  const currentRun = run = run || generateRun(questionsPerRun);
  const [runIndex, setRunIndex] = useState(0);
  const { set, answer, images } = currentRun[runIndex];
  const [isPerfectWord, setIsPerfectWord] = useState(true);
  const [isPerfectRun, setIsPerfectRun] = useState(true);
  const [newWordsSeen, setNewWordsSeen] = useState(0);
  const isPortrait = useIsPortrait();
  const fontSize = useResponsiveFontSize(isPortrait ? 3 : 2);

  return (
    <Screen background={color.canvasGame}>
      <View style={styles.prompt}>
        <View style={styles.promptText}>
          <Text style={[styles.definitionText, { fontSize }]}>
            {answer.entry.heading.map((textPart, index) => {
              return (<Text key={index} style={textPart.style === TextStyle.stressed ? styles.stressed : {}}>{textPart.text}</Text>)
            })}
          </Text>
        </View>
        {/* Колькі пытаньняў з дзесяці ўжо адказана. */}
        <ProgressBar value={runIndex / currentRun.length} height={4} track={color.line} />
      </View>
      {/* key па пытаньні: пліткі перастварваюцца, і анімацыі не цягнуцца з папярэдняга. */}
      <ImagesSection
        key={runIndex}
        images={images}
        answerIndex={set.indexOf(answer)}
        onCorrectChosen={onCorrectChosen}
        onWrongChosen={onWrongChosen}
        isPortrait={isPortrait}
      />
    </Screen>
  );

  function onCorrectChosen() {

    const nextRunIndex = runIndex + 1;
    const runCompleted = nextRunIndex === currentRun.length;
    const isNewWord = !getStats().seenWords.includes(answer.key);

    mutateStats(stats => {
      const result = copyStats(stats);
      result.attemptClicks++;
      result.successClicks++;
      if (isNewWord)
        result.seenWords.push(answer.key);
      if (isPerfectWord && !result.perfectedWords.includes(answer.key))
        result.perfectedWords.push(answer.key);
      if (runCompleted)
        result.runsCompleted++;
      return result;
    });

    if (isNewWord)
      setNewWordsSeen(x => x + 1);
    setIsPerfectWord(true);

    if (runCompleted) {
      run = generateRun();
      navigation.replace("ImageSelectionCompletion", {
        isPerfect: isPerfectRun,
        newWordsSeen: newWordsSeen + (isNewWord ? 1 : 0),
      });
    }
    else {
      setRunIndex(nextRunIndex);
    }
  }

  function onWrongChosen() {
    setIsPerfectWord(false);
    setIsPerfectRun(false);
    mutateStats(stats => {
      const result = copyStats(stats);
      result.attemptClicks++;
      return result;
    })
  }
};

const styles = StyleSheet.create({
  prompt: {
    height: '10%',
  },
  promptText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: space.lg,
  },
  definitionText: {
    fontFamily: font.semiBold,
    color: color.ink,
    textAlign: 'center',
  },
  stressed: {
    color: color.brand,
  },
});

function generateRun(questionsNumber: number = questionsPerRun, imagesNumber: number = imagesPerQuestion) {
  const stats = getStats();
  const answers = electManyWeighted(vocabulary, vocabularyItemWeight, questionsNumber);
  return answers.map(answer => {
    const set = electManyExceptFor(vocabulary, exclusionChecker(answer), imagesNumber - 1);
    randomInsert(set, answer);
    return { set, answer, images: set.map(x => electOne(x.images)) };
  });

  function vocabularyItemWeight(item: VocabularyItem) : number {
    // show less of perfected words
    if (stats.perfectedWords.includes(item.key))
      return 1;
    // but a bit more of attempted but not perfected ones
    if (stats.seenWords.includes(item.key))
      return 3;
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
