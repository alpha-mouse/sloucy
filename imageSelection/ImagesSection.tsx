import { useState } from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import SelectionTile from './../components/SelectionTile';

export const ImagesSection = ({
  images,
  answerIndex,
  onCorrectChosen,
  onWrongChosen,
  isPortrait,
}: {
  images: ImageSourcePropType[];
  answerIndex: number;
  onCorrectChosen: () => void;
  onWrongChosen: () => void;
  isPortrait: boolean;
}) => {
  // Адзін стан на два заданьні: якая плітка ўзьнятая наверх, і ці ідзе зараз анімацыя.
  // Пакуль анімацыя ідзе, усе пліткі заблякаваныя - інакш другі хуткі націск залічваецца двойчы.
  const [frontIndex, setFrontIndex] = useState<number | null>(null);

  return (
    <View style={styles.imageBlock}>
      {images.map((image, index) => {
        const zIndex = frontIndex === index ? 1 : 0;
        return (
          <View
            key={index}
            style={[
              isPortrait ? styles.imageWrapperPortrait : styles.imageWrapperLandscape,
              { zIndex, elevation: zIndex },
            ]}>
            <SelectionTile
              isCorrect={index === answerIndex}
              disabled={frontIndex !== null}
              onStart={() => setFrontIndex(index)}
              onSettled={onSettled}>
              <Image source={image} style={styles.image} />
            </SelectionTile>
          </View>
        );
      })
      }
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
  imageBlock: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageWrapperPortrait: {
    width: '50%',
    height: '33.3333%',
  },
  imageWrapperLandscape: {
    width: '33.3333%',
    height: '50%',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
