import React, {useEffect, useState, useRef} from 'react';
import {Animated, Easing, Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import vocabulary from './vocabulary';
import {electMany, electOne} from './utils';

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
  const degree = useRef(new Animated.Value(0)).current
  const scale = useRef(new Animated.Value(1)).current

  return (
    <Animated.View
      style={{
        ...styles.takeAllSpace,
        transform: [
          { rotate: degree.interpolate({inputRange: [0, 1], outputRange: ['0deg', '5deg']}) },
          { scale },
        ],
      }}>
      <TouchableHighlight
        style={styles.takeAllSpace}
        onPress={ isCorrect ? animateCorrect : animateWrong }>
        <Image source={image} style={styles.takeAllSpace} />
      </TouchableHighlight>
    </Animated.View>
  );

  function animateCorrect() {
    const halfPeriod = 100;
    const useNativeDriver = true;
    bringToFront();
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.1,
        duration: halfPeriod,
        useNativeDriver,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: halfPeriod * 2,
        useNativeDriver,
      }),
    ]).start(() => { 
      bringBack();
      onCorrectChosen();
    });
  };

  function animateWrong() {
    const quarterPeriod = 50;
    const useNativeDriver = true;
    bringToFront();
    Animated.sequence([
      Animated.timing(degree, {
        toValue: 1,
        duration: quarterPeriod,
        easing: Easing.linear,
        useNativeDriver,
      }),
      Animated.timing(degree, {
        toValue: -1,
        duration: quarterPeriod * 2,
        easing: Easing.linear,
        useNativeDriver,
      }),
      Animated.timing(degree, {
        toValue: 0,
        duration: quarterPeriod,
        easing: Easing.linear,
        useNativeDriver,
      }),
    ]).start(bringBack);
  };
};

const ImagesSection = ({
  images,
  answerIndex,
  onSolved,
}: {
  images: any[];
  answerIndex: number;
  onSolved: () => void;
}) => {
  var [isPortrait, setIsPortrait] = useState(true);
  useEffect(() => {
    ScreenOrientation.getOrientationAsync()
      .then(orientation => setIsPortrait(isOrientationPortrait(orientation)))

    const subscription = ScreenOrientation.addOrientationChangeListener(event =>
      setIsPortrait(isOrientationPortrait(event.orientationInfo.orientation)))
    return () => ScreenOrientation.removeOrientationChangeListener(subscription);
  }, []);

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

  function isOrientationPortrait(orientation : ScreenOrientation.Orientation) {
    return orientation === ScreenOrientation.Orientation.PORTRAIT_DOWN 
      || orientation === ScreenOrientation.Orientation.PORTRAIT_UP
  }
};

const {set: defaultSet, answer: defaultAnswer} = generateQuestion();
const defaultImages = defaultSet.map(x => electOne(x.images));

const ImageSelectionGame = () => {
  var [set, setSet] = useState(defaultSet);
  var [answer, setAnswer] = useState(defaultAnswer);
  var [images, setImages] = useState(defaultImages);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{answer.word}</Text>
      <ImagesSection
        images={images}
        answerIndex={set.indexOf(answer)}
        onSolved={generateNext}
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
    height: 80,
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
