import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SelectionTile from './../components/SelectionTile';
import { TextStyle, VocabularyItem } from './../vocabulary';
import { color, radius, shadow, space, type } from './../theme';

export const WordsSection = ({
  items,
  answerIndex,
  onCorrectChosen,
  onWrongChosen,
}: {
  items: VocabularyItem[];
  answerIndex: number;
  onCorrectChosen: () => void;
  onWrongChosen: () => void;
}) => {
  // Той самы замок, што і ў ImagesSection: пакуль ідзе анімацыя, ніводная плітка не націскаецца.
  const [frontIndex, setFrontIndex] = useState<number | null>(null);

  return (
    <View style={styles.words}>
      {items.map((item, index) => {
        const zIndex = frontIndex === index ? 1 : 0;
        return (
          <View key={index} style={[styles.wordWrapper, { zIndex, elevation: zIndex }]}>
            <SelectionTile
              isCorrect={index === answerIndex}
              disabled={frontIndex !== null}
              onStart={() => setFrontIndex(index)}
              onSettled={onSettled}
              style={styles.word}
              highlightStyle={styles.highlight}
              shakeDegrees={2}>
              <Text style={[type.headline, styles.wordText]} numberOfLines={1}>
                {item.entry.heading.map((textPart, partIndex) => {
                  return (<Text key={partIndex} style={textPart.style === TextStyle.stressed ? styles.stressed : {}}>{textPart.text}</Text>)
                })}
              </Text>
            </SelectionTile>
          </View>
        );
      })}
    </View>
  );

  function onSettled(finished: boolean, isCorrect: boolean) {
    setFrontIndex(null);
    if (!finished)
      return;
    if (isCorrect)
      onCorrectChosen();
    else
      onWrongChosen();
  }
};

const styles = StyleSheet.create({
  words: {
    flex: 1,
    padding: space.lg,
    gap: space.sm,
  },
  wordWrapper: {
    flex: 1,
  },
  word: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: space.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: color.lineStrong,
    backgroundColor: color.surface,
    ...shadow,
  },
  // Абводка мусіць паўтараць скругленыя рагі пліткі, інакш вылазіць вугламі за яе.
  highlight: {
    borderRadius: radius.md,
  },
  wordText: {
    color: color.ink,
    textAlign: 'center',
  },
  stressed: {
    color: color.brand,
  },
});
