import { Dimensions, Platform, StatusBar } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

export function isOrientationPortrait(orientation: ScreenOrientation.Orientation) {
  return orientation === ScreenOrientation.Orientation.PORTRAIT_DOWN
    || orientation === ScreenOrientation.Orientation.PORTRAIT_UP
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
