import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextStyle } from './../vocabulary';
import { generateQuestions } from './../gameRun';
import { electOne } from './../randomization';
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

const ImageSelectionGame = ({ navigation }: Props) => {
  // Забег ствараецца адзін раз на манціраваньне экрана: кожны новы заход у гульню - новы выпадковы забег.
  const [currentRun] = useState(generateRun);
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
  return generateQuestions(getStats(), questionsNumber, imagesNumber)
    .map(question => ({ ...question, images: question.set.map(x => electOne(x.images)) }));
}

export default ImageSelectionGame;
