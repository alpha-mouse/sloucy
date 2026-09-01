import { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { generateQuestions } from './../gameRun';
import { electOne } from './../randomization';
import { copyStats, mutateStats, getStats } from './persistence';
import { WordsSection } from './WordsSection';
import { Routes } from './../Routes';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Screen from './../components/Screen';
import ProgressBar from './../components/ProgressBar';
import { color, radius, space } from './../theme';
import { useIsPortrait } from './../utils';


type Props = NativeStackScreenProps<Routes, 'WordSelectionGame'>;

const questionsPerRun = 10;
const wordsPerQuestion = 6;

const WordSelectionGame = ({ navigation }: Props) => {
  // Забег ствараецца адзін раз на манціраваньне экрана: кожны новы заход у гульню - новы выпадковы забег.
  const [currentRun] = useState(generateRun);
  const [runIndex, setRunIndex] = useState(0);
  const { set, answer, image } = currentRun[runIndex];
  const [isPerfectWord, setIsPerfectWord] = useState(true);
  const [isPerfectRun, setIsPerfectRun] = useState(true);
  const [newWordsSeen, setNewWordsSeen] = useState(0);
  const isPortrait = useIsPortrait();

  return (
    <Screen background={color.canvasGame}>
      {/* Колькі пытаньняў з дзесяці ўжо адказана. */}
      <ProgressBar value={runIndex / currentRun.length} height={4} track={color.line} />
      <View style={isPortrait ? styles.contentPortrait : styles.contentLandscape}>
        <View style={isPortrait ? styles.imagePanePortrait : styles.imagePaneLandscape}>
          <Image source={image} style={styles.image} resizeMode="cover" />
        </View>
        {/* key па пытаньні: пліткі перастварваюцца, і анімацыі не цягнуцца з папярэдняга. */}
        <WordsSection
          key={runIndex}
          items={set}
          answerIndex={set.indexOf(answer)}
          onCorrectChosen={onCorrectChosen}
          onWrongChosen={onWrongChosen}
        />
      </View>
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
      navigation.replace("Completion", {
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
  contentPortrait: {
    flex: 1,
  },
  contentLandscape: {
    flex: 1,
    flexDirection: 'row',
  },
  imagePanePortrait: {
    height: '40%',
    padding: space.lg,
    paddingBottom: 0,
  },
  imagePaneLandscape: {
    width: '45%',
    padding: space.lg,
    paddingRight: 0,
  },
  image: {
    flex: 1,
    width: '100%',
    borderRadius: radius.lg,
  },
});

function generateRun(questionsNumber: number = questionsPerRun, wordsNumber: number = wordsPerQuestion) {
  return generateQuestions(getStats(), questionsNumber, wordsNumber)
    .map(question => ({ ...question, image: electOne(question.answer.images) }));
}

export default WordSelectionGame;
