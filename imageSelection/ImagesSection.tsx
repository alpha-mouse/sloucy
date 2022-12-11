import React, { useState, useRef } from 'react';
import { Animated, Easing, Image, StyleSheet, TouchableHighlight, View } from 'react-native';

const wrongColor = '#790909bb';
const correctColor = '#137909bb';

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

export const ImagesSection = ({
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
});
