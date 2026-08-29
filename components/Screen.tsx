import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView, Edge } from 'react-native-safe-area-context';
import { color } from '../theme';

// Кожны экран мусіць мець свой колер фону, інакш устаўкі (status bar,
// gesture pill) малююцца голым фонам акна - edge-to-edge на targetSdk 36.
const Screen = ({
  children,
  background = color.canvas,
  edges = ['top', 'bottom', 'left', 'right'],
  style,
}: {
  children: React.ReactNode;
  background?: string;
  // Screens under a navigation header pass ['bottom', 'left', 'right'] -
  // the header already covers the top inset.
  edges?: readonly Edge[];
  style?: StyleProp<ViewStyle>;
}) => (
  <SafeAreaView edges={edges} style={[styles.screen, { backgroundColor: background }, style]}>
    {children}
  </SafeAreaView>
);

export default Screen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
