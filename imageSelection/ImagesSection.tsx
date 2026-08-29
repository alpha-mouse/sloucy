import { useState, useRef } from 'react';
import { Animated, Easing, Image, ImageSourcePropType, Pressable, StyleSheet, View } from 'react-native';

const wrongColor = '#790909bb';
const correctColor = '#137909bb';

const ImageBlock = ({
  image,
  isCorrect,
  disabled,
  onStart,
  onSettled,
}: {
  image: ImageSourcePropType;
  isCorrect: boolean;
  disabled: boolean;
  onStart: () => void;
  // finished === false значыць, што анімацыю перарвалі - тады адказ не залічваецца.
  onSettled: (finished: boolean, isCorrect: boolean) => void;
}) => {
  const wrongRotationDegree = useRef(new Animated.Value(0)).current
  const checkOpacity = useRef(new Animated.Value(0)).current
  const correctScale = useRef(new Animated.Value(1)).current
  const [highlightColor, setHighlightColor] = useState(correctColor)

  return (
    <Animated.View
      style={[
        styles.takeAllSpace,
        {
          transform: [
            { rotate: wrongRotationDegree.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '5deg'] }) },
            { scale: correctScale },
          ],
        },
      ]}>
      <Pressable
        style={styles.takeAllSpace}
        disabled={disabled}
        onPress={isCorrect ? animateCorrect : animateWrong}>
        <View style={styles.takeAllSpace}>
          <Image source={image} style={styles.takeAllSpace} />
          <Animated.View style={[
            styles.takeAllSpace,
            styles.highlight,
            { opacity: checkOpacity, borderColor: highlightColor },
          ]} />
        </View>
      </Pressable>
    </Animated.View>
  );

  function animateCorrect() {
    const halfPeriod = 100;
    const useNativeDriver = true;
    setHighlightColor(correctColor);
    onStart();
    Animated.parallel([
      Animated.sequence([
        Animated.timing(correctScale, {
          toValue: 1.1,
          duration: halfPeriod,
          useNativeDriver,
        }),
        Animated.timing(correctScale, {
          toValue: 1,
          duration: halfPeriod * 2,
          useNativeDriver,
        }),
      ]),
      Animated.sequence([
        Animated.timing(checkOpacity, {
          toValue: 1,
          duration: halfPeriod,
          easing: Easing.ease,
          useNativeDriver,
        }),
        Animated.timing(checkOpacity, {
          toValue: 0,
          duration: halfPeriod,
          easing: Easing.ease,
          useNativeDriver,
        }),
      ]),
    ]).start(({ finished }) => onSettled(finished, true));
  };

  function animateWrong() {
    const quarterPeriod = 50;
    const useNativeDriver = true;
    setHighlightColor(wrongColor);
    onStart();
    Animated.parallel([
      Animated.sequence([
        Animated.timing(wrongRotationDegree, {
          toValue: 1,
          duration: quarterPeriod,
          easing: Easing.linear,
          useNativeDriver,
        }),
        Animated.timing(wrongRotationDegree, {
          toValue: -1,
          duration: quarterPeriod * 2,
          easing: Easing.linear,
          useNativeDriver,
        }),
        Animated.timing(wrongRotationDegree, {
          toValue: 0,
          duration: quarterPeriod,
          easing: Easing.linear,
          useNativeDriver,
        }),
      ]),
      Animated.sequence([
        Animated.timing(checkOpacity, {
          toValue: 1,
          duration: quarterPeriod,
          easing: Easing.ease,
          useNativeDriver,
        }),
        Animated.timing(checkOpacity, {
          toValue: 0,
          duration: quarterPeriod * 3,
          easing: Easing.ease,
          useNativeDriver,
        }),
      ]),
    ]).start(({ finished }) => onSettled(finished, false));
  };
};

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
            <ImageBlock
              image={image}
              isCorrect={index === answerIndex}
              disabled={frontIndex !== null}
              onStart={() => setFrontIndex(index)}
              onSettled={onSettled}
            />
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
  takeAllSpace: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  highlight: {
    position: 'absolute',
    top: 0,
    borderWidth: 5,
  },
});
