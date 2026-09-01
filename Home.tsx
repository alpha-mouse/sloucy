import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Routes } from './Routes';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Screen from './components/Screen';
import { ImageChoiceSketch, WordChoiceSketch } from './components/GameSketches';
import { color, radius, shadow, space, type } from './theme';
import { useIsPortrait } from './utils';

type Props = NativeStackScreenProps<Routes, 'Home'>;

const ModeButton = ({
  label,
  accessibilityLabel,
  sketch,
  onPress,
}: {
  label: string;
  accessibilityLabel: string;
  sketch: React.ReactNode;
  onPress: () => void;
}) => (
  <Pressable
    accessibilityRole="button"
    accessibilityLabel={accessibilityLabel}
    onPress={onPress}
    style={({ pressed }) => [styles.panel, pressed && styles.panelPressed]}>
    <View style={styles.sketch}>{sketch}</View>
    <Text style={[type.headline, styles.panelLabel]}>{label}</Text>
  </Pressable>
);

const Home = ({ navigation }: Props) => {

  const isPortrait = useIsPortrait();
  const sketchSize = isPortrait ? 128 : 96;

  return (
    <Screen>
      <View style={styles.header}>
        <Text style={[
          isPortrait ? type.display : type.title,
          styles.wordmark,
        ]}>СЛОЎЦЫ</Text>
        <View style={styles.rule} />
      </View>

      {/* Дзьве гульні: у партрэце адна пад адной, у ляндшафце - побач. */}
      <View style={isPortrait ? styles.modesPortrait : styles.modesLandscape}>
        <ModeButton
          label="ВЫБАР МАЛЮНКА"
          accessibilityLabel="Выбар малюнка"
          sketch={<ImageChoiceSketch size={sketchSize} />}
          onPress={() => navigation.navigate('ImageSelectionGame')} />
        <ModeButton
          label="ВЫБАР СЛОВА"
          accessibilityLabel="Выбар слова"
          sketch={<WordChoiceSketch size={sketchSize} />}
          onPress={() => navigation.navigate('WordSelectionGame')} />
      </View>

      <Pressable
        accessibilityRole="button"
        onPress={() => navigation.navigate('Statistics')}
        style={({ pressed }) => [styles.statisticsRow, pressed && styles.statisticsRowPressed]}
        android_ripple={{ color: color.line }}>
        <Text style={[type.label, styles.statisticsLabel]}>Статыстыка</Text>
        <Text style={styles.statisticsChevron}>›</Text>
      </Pressable>
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingTop: space.xl,
  },
  wordmark: {
    color: color.brand,
    letterSpacing: 4,
    textAlign: 'center',
  },
  rule: {
    width: 44,
    height: 2,
    marginTop: space.md,
    borderRadius: radius.pill,
    backgroundColor: color.brand,
  },
  modesPortrait: {
    flex: 1,
    margin: space.lg,
    gap: space.lg,
  },
  modesLandscape: {
    flex: 1,
    flexDirection: 'row',
    margin: space.lg,
    gap: space.lg,
  },
  panel: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: space.lg,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: color.lineStrong,
    backgroundColor: color.surface,
    ...shadow,
  },
  panelPressed: {
    backgroundColor: color.brandSoft,
    borderColor: color.brand,
  },
  sketch: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: space.lg,
  },
  panelLabel: {
    color: color.ink,
    letterSpacing: 2,
    textAlign: 'center',
  },
  statisticsRow: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: space.xl,
    borderTopWidth: 1,
    borderTopColor: color.line,
  },
  statisticsRowPressed: {
    backgroundColor: color.line,
  },
  statisticsLabel: {
    color: color.inkMuted,
  },
  statisticsChevron: {
    fontSize: 22,
    lineHeight: 26,
    color: color.inkFaint,
  },
});
