import React, { useEffect, useState, useRef } from 'react';
import { Animated, Easing, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as ScreenOrientation from 'expo-screen-orientation';
import vocabulary, { TextStyle, VocabularyItem } from './vocabulary';
import { electMany, electOne } from './../utils';
import { getStats, ImageSelectionGameStats, mutateStats } from './persistence'

const wrongColor = '#790909bb';
const correctColor = '#137909bb';
const recentWordExclusionHorizon = 10; // do not propose guessing the same word if was already proposed within the 10 last ones

const ImageBlock = ({
  image,
  isCorrect,
  onCorrectChosen,
  onWrongChosen,
  bringToFront,
  bringBack,
}: {
  image: any;
  isCorrect: boolean;
  onCorrectChosen: () => void;
  onWrongChosen: () => void;
  bringToFront: () => void;
  bringBack: () => void;
}) => {
  const wrongRotationDegree = useRef(new Animated.Value(0)).current
  const checkOpacity = useRef(new Animated.Value(0)).current
  const correctScale = useRef(new Animated.Value(1)).current
  const [highlightColor, setHighlightColor] = useState(correctColor)

  return (
    <Animated.View
      style={{
        ...styles.takeAllSpace,
        transform: [
          { rotate: wrongRotationDegree.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '5deg'] }) },
          { scale: correctScale },
        ],
      }}>
      <TouchableHighlight
        style={styles.takeAllSpace}
        onPress={isCorrect ? animateCorrect : animateWrong}>
        <View style={styles.takeAllSpace}>
          <Image source={image} style={styles.takeAllSpace} />
          <Animated.View style={{
            ...styles.takeAllSpace,
            opacity: checkOpacity,
            position: 'absolute',
            top: 0,
            borderColor: highlightColor,
            borderWidth: 5,
          }}>
          </Animated.View>
        </View>
      </TouchableHighlight>
    </Animated.View>
  );

  function animateCorrect() {
    const halfPeriod = 100;
    const useNativeDriver = true;
    setHighlightColor(correctColor);
    bringToFront();
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
    ]).start(() => {
      bringBack();
      onCorrectChosen();
    });
  };

  function animateWrong() {
    const quarterPeriod = 50;
    const useNativeDriver = true;
    setHighlightColor(wrongColor);
    bringToFront();
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
    ]).start(() => {
      bringBack();
      onWrongChosen();
    });
  };
};

const ImagesSection = ({
  images,
  answerIndex,
  onCorrectChosen,
  onWrongChosen,
  isPortrait,
}: {
  images: any[];
  answerIndex: number;
  onCorrectChosen: () => void;
  onWrongChosen: () => void;
  isPortrait: boolean;
}) => {

  return (
    <View style={styles.imageBlock}>
      {images.map((image: any, index: number) => {
        const [atTheFront, setAtTheFront] = useState(false);
        const zIndex = atTheFront ? 1 : 0;
        return (
          <View
            key={index}
            style={{
              ...(isPortrait ? styles.imageWrapperPortrait : styles.imageWrapperLandscape),
              zIndex,
              elevation: zIndex,
            }}>
            <ImageBlock
              image={image}
              isCorrect={index === answerIndex}
              onCorrectChosen={onCorrectChosen}
              onWrongChosen={onWrongChosen}
              bringToFront={() => setAtTheFront(true)}
              bringBack={() => setAtTheFront(false)}
            />
          </View>
        );
      })
      }
    </View>
  );
};

const { set: defaultSet, answer: defaultAnswer } = generateQuestion();
const defaultImages = defaultSet.map(x => electOne(x.images));

const ImageSelectionGame = () => {
  var [set, setSet] = useState(defaultSet);
  var [answer, setAnswer] = useState(defaultAnswer);
  var [images, setImages] = useState(defaultImages);
  var [recentAnswers, setRecentAnswers] = useState([] as VocabularyItem[]);
  var [isPerfect, setIsPerfect] = useState(true);
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
    const nextRecentAnswers = [...recentAnswers, answer].slice(-recentWordExclusionHorizon);
    setRecentAnswers(nextRecentAnswers);
    let nextSet, nextAnswer;
    do {
      const next = generateQuestion();
      nextSet = next.set;
      nextAnswer = next.answer;
    } while (nextRecentAnswers.includes(nextAnswer));
    setSet(nextSet);
    setAnswer(nextAnswer);
    setImages(nextSet.map(x => electOne(x.images)));
    mutateStats(stats => {
      const result = ImageSelectionGameStats.fromOther(stats);
      result.attemptClicks ++;
      result.successClicks ++;
      if (!result.seenWords.includes(answer.key))
        result.seenWords.push(answer.key);
      if (isPerfect && !result.perfectedWords.includes(answer.key))
        result.perfectedWords.push(answer.key);
      return result;
    });
  }

  function onWrongChosen() {
    setIsPerfect(false);
    mutateStats(stats => {
      const result = ImageSelectionGameStats.fromOther(stats);
      result.attemptClicks ++;
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
});

function generateQuestion() {
  const set = electMany(vocabulary, 6);
  const answer = electOne(set);
  return { set, answer };
}

export default ImageSelectionGame;
