import { useEffect, useState } from 'react';
import { Dimensions, Platform, StatusBar } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

export function isOrientationPortrait(orientation: ScreenOrientation.Orientation) {
  return orientation === ScreenOrientation.Orientation.PORTRAIT_DOWN
    || orientation === ScreenOrientation.Orientation.PORTRAIT_UP
}

// Раней кожны экран трымаў уласную копію гэтай падпіскі.
export function useIsPortrait() {
  const [isPortrait, setIsPortrait] = useState(true);

  useEffect(() => {
    ScreenOrientation.getOrientationAsync()
      .then(orientation => setIsPortrait(isOrientationPortrait(orientation)))

    const subscription = ScreenOrientation.addOrientationChangeListener(event =>
      setIsPortrait(isOrientationPortrait(event.orientationInfo.orientation)))
    return () => subscription.remove();
  }, []);

  return isPortrait;
}

// Памер шрыфту ў адсотках ад вышыні экрану.
// Партаваны з react-native-responsive-fontsize, які больш не падтрымліваецца.
export function responsiveFontSize(percent: number) {
  const { height, width } = Dimensions.get('window');
  const standardLength = width > height ? width : height;
  const offset = width > height ? 0 : StatusBar.currentHeight ?? 0;
  const deviceHeight = Platform.OS === 'android' ? standardLength - offset : standardLength;
  return Math.round((percent * deviceHeight) / 100);
}
