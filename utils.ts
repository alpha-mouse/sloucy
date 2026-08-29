import { useWindowDimensions } from 'react-native';

// Прапорцыі акна, а не арыентацыя прылады: працуе і ў падзеленым экране, ды слушнае ўжо на першым кадры - без асінхроннага запыту да expo-screen-orientation.
export function useIsPortrait() {
  const { width, height } = useWindowDimensions();
  return height >= width;
}

// Памер шрыфту ў адсотках ад доўгага боку акна.
// Партаваны з react-native-responsive-fontsize, які больш не падтрымліваецца.
export function useResponsiveFontSize(percent: number) {
  const { width, height } = useWindowDimensions();
  return Math.round((percent * Math.max(width, height)) / 100);
}
