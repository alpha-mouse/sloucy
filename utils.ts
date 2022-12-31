import * as ScreenOrientation from 'expo-screen-orientation';

export function isOrientationPortrait(orientation: ScreenOrientation.Orientation) {
  return orientation === ScreenOrientation.Orientation.PORTRAIT_DOWN
    || orientation === ScreenOrientation.Orientation.PORTRAIT_UP
}
