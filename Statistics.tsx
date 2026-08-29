import { Linking, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Routes } from './Routes';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Screen from './components/Screen';
import StatTile from './components/StatTile';
import { getStats } from './imageSelection/persistence';
import vocabulary from './imageSelection/vocabulary';
import { color, space, type } from './theme';

type Props = NativeStackScreenProps<Routes, 'Statistics'>;

// Кнопка "назад" цяпер родная, з загалоўка навігацыі - свая больш не патрэбная.
const Statistics = (_: Props) => {

  const stats = getStats();
  const statsAreEmpty = stats.attemptClicks === 0;
  const totalWords = vocabulary.length;
  const perfected = stats.perfectedWords.length;
  const seen = stats.seenWords.length;
  const mastery = statsAreEmpty ? 0 : stats.successClicks / stats.attemptClicks * 100;

  return (
    // Загаловак навігацыі ўжо закрывае верхнюю ўстаўку.
    <Screen edges={['bottom', 'left', 'right']}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {statsAreEmpty
          ?
          <View style={styles.empty}>
            <Text style={[type.body, styles.emptyText]}>Пакуль ніводнай гульні ня пройдзена</Text>
          </View>
          :
          <>
            <View style={styles.row}>
              <StatTile
                value={`${stats.runsCompleted}`}
                label="гульняў пройдзена"
                tint={color.ink}
                style={styles.rowTile}
              />
              <StatTile
                value={`${mastery.toFixed(0)}%`}
                label="майстэрства"
                tint={color.ink}
                style={styles.rowTile}
              />
            </View>
            <StatTile
              value={`${perfected} / ${totalWords}`}
              label="словаў вывучана"
              progress={perfected / totalWords}
              tint={color.brand}
            />
            <StatTile
              value={`${seen} / ${totalWords}`}
              label="словаў пабачана"
              progress={seen / totalWords}
              tint={color.accent}
            />
          </>
        }
      </ScrollView>

      <View style={styles.info}>
        <Text style={[type.caption, styles.infoText]}>Зыходны код на GitHub:</Text>
        <Text style={[type.caption, styles.link]} onPress={() => Linking.openURL('https://github.com/alpha-mouse/sloucy')}>
          https://github.com/alpha-mouse/sloucy
        </Text>
        <Text style={[type.caption, styles.infoText, styles.infoSpaced]}>
          Заўвагі і прапановы можна на пошту кідаць:{' '}
          <Text style={styles.link} onPress={() => Linking.openURL('mailto:sloucy1@gmail.com')}>sloucy1@gmail.com</Text>
        </Text>
      </View>
    </Screen>
  );
};

export default Statistics;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  content: {
    padding: space.lg,
    gap: space.md,
  },
  row: {
    flexDirection: 'row',
    gap: space.md,
  },
  rowTile: {
    flex: 1,
  },
  empty: {
    paddingVertical: space.xxxl,
    alignItems: 'center',
  },
  emptyText: {
    color: color.inkMuted,
    textAlign: 'center',
  },
  info: {
    padding: space.lg,
    borderTopWidth: 1,
    borderTopColor: color.line,
  },
  infoText: {
    color: color.inkMuted,
  },
  infoSpaced: {
    marginTop: space.sm,
  },
  link: {
    color: color.accent,
    textDecorationLine: 'underline',
  },
});
