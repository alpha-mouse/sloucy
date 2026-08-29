import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Routes } from './Routes';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Screen from './components/Screen';
import { color, radius, shadow, space, type } from './theme';
import { useIsPortrait } from './utils';

type Props = NativeStackScreenProps<Routes, 'Home'>;

const Home = ({ navigation }: Props) => {

  const isPortrait = useIsPortrait();

  return (
    <Screen>
      {/* Уся панэль - адна вялікая кнопка, як і было; проста цяпер відаць, што кнопка. */}
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Згуляць"
        onPress={() => navigation.navigate('ImageSelectionGame')}
        style={({ pressed }) => [styles.panel, pressed && styles.panelPressed]}>
        <Text style={[
          isPortrait ? type.display : type.title,
          styles.wordmark,
        ]}>СЛОЎЦЫ</Text>
        <View style={styles.rule} />
        <View style={styles.callToAction}>
          <Text style={[type.headline, styles.callToActionText]}>ЗГУЛЯЦЬ</Text>
          <Text style={styles.callToActionChevron}>›</Text>
        </View>
      </Pressable>

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
  panel: {
    flex: 1,
    margin: space.lg,
    alignItems: 'center',
    justifyContent: 'center',
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
  wordmark: {
    color: color.brand,
    letterSpacing: 4,
    textAlign: 'center',
  },
  rule: {
    width: 44,
    height: 2,
    marginTop: space.lg,
    marginBottom: space.xl,
    borderRadius: radius.pill,
    backgroundColor: color.brand,
  },
  callToAction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  callToActionText: {
    color: color.ink,
    letterSpacing: 2,
  },
  callToActionChevron: {
    fontSize: 26,
    lineHeight: 30,
    marginLeft: space.sm,
    color: color.inkFaint,
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
