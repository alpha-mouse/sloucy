import React, {useEffect, useState, useRef} from 'react';
import {Animated, Easing, Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as ScreenOrientation from 'expo-screen-orientation';
import vocabulary from './vocabulary';
import {electMany, electOne} from './utils';

const wrongColor = '#790909bb';
const correctColor = '#137909bb';

const ImageBlock = ({
  image,
  isCorrect,
  onCorrectChosen,
  bringToFront,
  bringBack,
}: {
  image: any;
  isCorrect: boolean;
  onCorrectChosen: () => void;
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
          { rotate: wrongRotationDegree.interpolate({inputRange: [0, 1], outputRange: ['0deg', '5deg']}) },
          { scale: correctScale },
        ],
      }}>
      <TouchableHighlight
        style={styles.takeAllSpace}
        onPress={ isCorrect ? animateCorrect : animateWrong }>
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
    ]).start(bringBack);
  };
};

const ImagesSection = ({
  images,
  answerIndex,
  onSolved,
  isPortrait,
}: {
  images: any[];
  answerIndex: number;
  onSolved: () => void;
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
              onCorrectChosen={handlePress}
              bringToFront={() => setAtTheFront(true)}
              bringBack={() => setAtTheFront(false)}
            />
          </View>
        );

        function handlePress() {
          if (index === answerIndex) {
            onSolved();
          }
        }
      })
    }
    </View>
  );
};

const {set: defaultSet, answer: defaultAnswer} = generateQuestion();
const defaultImages = defaultSet.map(x => electOne(x.images));

const ImageSelectionGame = () => {
  var [set, setSet] = useState(defaultSet);
  var [answer, setAnswer] = useState(defaultAnswer);
  var [images, setImages] = useState(defaultImages);

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
      <StatusBar/>
      <Text style={{
        ...styles.text,
        height: isPortrait ? '9%' : '6%',
        }}>{answer.word}</Text>
      <ImagesSection
        images={images}
        answerIndex={set.indexOf(answer)}
        onSolved={generateNext}
        isPortrait={isPortrait}
      />
    </View>
  );

  function generateNext() {
    let nextSet, nextAnswer;
    do {
      const next = generateQuestion();
      nextSet = next.set;
      nextAnswer = next.answer;
    } while (nextAnswer === answer);
    setSet(nextSet);
    setAnswer(nextAnswer);
    setImages(nextSet.map(x => electOne(x.images)));
  }

  function isOrientationPortrait(orientation : ScreenOrientation.Orientation) {
    return orientation === ScreenOrientation.Orientation.PORTRAIT_DOWN 
      || orientation === ScreenOrientation.Orientation.PORTRAIT_UP
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column-reverse',
    height: '100%',
  },
  text: {
    backgroundColor: 'beige',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
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
  return {set, answer};
}

export default ImageSelectionGame;
