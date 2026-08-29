import { TextStyle, ViewStyle } from 'react-native';

// The single source of truth for the app's look. Screens should not hardcode colors, font sizes or spacing - pull them from here.

export const font = {
  regular: 'Inter_400Regular',
  medium: 'Inter_500Medium',
  semiBold: 'Inter_600SemiBold',
  bold: 'Inter_700Bold',
} as const;

// Assets for Font.loadAsync at app startup; keys must match `font` above.
// The files are imported directly: import from the package root imports all 18 font files (~6 MB) into the build, but we only need four.
export const fontAssets = {
  Inter_400Regular: require('@expo-google-fonts/inter/400Regular/Inter_400Regular.ttf'),
  Inter_500Medium: require('@expo-google-fonts/inter/500Medium/Inter_500Medium.ttf'),
  Inter_600SemiBold: require('@expo-google-fonts/inter/600SemiBold/Inter_600SemiBold.ttf'),
  Inter_700Bold: require('@expo-google-fonts/inter/700Bold/Inter_700Bold.ttf'),
};

export const color = {
  // Brand red, plus a pressed shade and a tint for progress tracks and fills.
  brand: '#A92B1F',
  brandDeep: '#8A2219',
  brandSoft: '#F6E7E4',

  // Secondary accent - "passed, but not perfect", and links.
  accent: '#1F2BA9',
  accentSoft: '#E4E6F6',

  // Warm neutral ramp, tuned to sit next to the brand red rather than fight it.
  ink: '#1F1B18',
  inkMuted: '#6E655E',
  inkFaint: '#9C938B',

  surface: '#FFFFFF',
  canvas: '#FAF7F2',
  canvasGame: '#F4EEE1',

  line: '#E6DFD4',
  lineStrong: '#D5CBBC',
} as const;

export const space = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
} as const;

export const radius = {
  sm: 8,
  md: 14,
  lg: 20,
  pill: 999,
} as const;

export const type = {
  display: { fontFamily: font.bold, fontSize: 40, lineHeight: 46, letterSpacing: 3 },
  title: { fontFamily: font.semiBold, fontSize: 28, lineHeight: 34 },
  headline: { fontFamily: font.semiBold, fontSize: 22, lineHeight: 28 },
  number: { fontFamily: font.bold, fontSize: 30, lineHeight: 36, fontVariant: ['tabular-nums'] as const },
  numberSmall: { fontFamily: font.semiBold, fontSize: 20, lineHeight: 26, fontVariant: ['tabular-nums'] as const },
  body: { fontFamily: font.regular, fontSize: 17, lineHeight: 24 },
  label: { fontFamily: font.medium, fontSize: 15, lineHeight: 20 },
  caption: { fontFamily: font.regular, fontSize: 13, lineHeight: 18 },
  overline: { fontFamily: font.semiBold, fontSize: 13, lineHeight: 16, letterSpacing: 1.6 },
} satisfies Record<string, TextStyle>;

// One soft, warm shadow. Each platform ignores the props it does not use.
export const shadow: ViewStyle = {
  shadowColor: '#3A2E22',
  shadowOpacity: 0.07,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 3 },
  elevation: 2,
};
