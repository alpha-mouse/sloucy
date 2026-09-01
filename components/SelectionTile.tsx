import { useState, useRef } from 'react';
import { Animated, Easing, Pressable, StyleProp, StyleSheet, ViewStyle } from 'react-native';

const wrongColor = '#790909bb';
const correctColor = '#137909bb';

// Плітка з адказам: правільны - пульсуе ды зеляніцца, памылковы - торгаецца ды чырванее.
// Сама плітка ня ведае, што ўнутры - малюнак ці слова.
const SelectionTile = ({
  isCorrect,
  disabled,
  onStart,
  onSettled,
  style,
  highlightStyle,
  shakeDegrees = 5,
  children,
}: {
  isCorrect: boolean;
  disabled: boolean;
  onStart: () => void;
  // finished === false значыць, што анімацыю перарвалі - тады адказ не залічваецца.
  onSettled: (finished: boolean, isCorrect: boolean) => void;
  style?: StyleProp<ViewStyle>;
  highlightStyle?: StyleProp<ViewStyle>;
  shakeDegrees?: number;
  children: React.ReactNode;
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
            { rotate: wrongRotationDegree.interpolate({ inputRange: [0, 1], outputRange: ['0deg', `${shakeDegrees}deg`] }) },
            { scale: correctScale },
          ],
        },
      ]}>
      <Pressable
        style={[styles.takeAllSpace, style]}
        disabled={disabled}
        onPress={isCorrect ? animateCorrect : animateWrong}>
        {children}
        <Animated.View
          pointerEvents="none"
          style={[
            styles.takeAllSpace,
            styles.highlight,
            highlightStyle,
            { opacity: checkOpacity, borderColor: highlightColor },
          ]} />
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

export default SelectionTile;

const styles = StyleSheet.create({
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
