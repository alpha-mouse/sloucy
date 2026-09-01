import { Linking, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Routes } from './Routes';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Screen from './components/Screen';
import StatTile from './components/StatTile';
import type { GameStats } from './gameStats';
import { getStats as getImageSelectionStats } from './imageSelection/persistence';
import { getStats as getWordSelectionStats } from './wordSelection/persistence';
import vocabulary from './vocabulary';
import { color, space, type } from './theme';

type Props = NativeStackScreenProps<Routes, 'Statistics'>;

const totalWords = vocabulary.length;

const GameSection = ({ title, stats }: { title: string; stats: GameStats }) => {

  const statsAreEmpty = stats.attemptClicks === 0;
  const perfected = stats.perfectedWords.length;
  const seen = stats.seenWords.length;
  const mastery = statsAreEmpty ? 0 : stats.successClicks / stats.attemptClicks * 100;

  return (
    <View style={styles.section}>
      <Text style={[type.overline, styles.sectionTitle]}>{title}</Text>
      {statsAreEmpty
        ?
        <Text style={[type.body, styles.emptyText]}>Пакуль ніводнай гульні ня пройдзена</Text>
        :
        <>
          <View style={styles.row}>
            <StatTile value={`${stats.runsCompleted}`} label="гульняў пройдзена" tint={color.ink} style={styles.rowTile} />
            <StatTile value={`${mastery.toFixed(0)}%`} label="майстэрства" tint={color.ink} style={styles.rowTile} />
          </View>
          <StatTile value={`${perfected} / ${totalWords}`} label="словаў вывучана"
            progress={perfected / totalWords} tint={color.brand} />
          <StatTile value={`${seen} / ${totalWords}`} label="словаў пабачана"
            progress={seen / totalWords} tint={color.accent} />
        </>
      }
    </View>
  );
};

// Кнопка "назад" цяпер родная, з загалоўка навігацыі - свая больш не патрэбная.
const Statistics = (_: Props) => {

  const imageSelectionStats = getImageSelectionStats();
  const wordSelectionStats = getWordSelectionStats();
  const nothingPlayedAtAll = imageSelectionStats.attemptClicks === 0 && wordSelectionStats.attemptClicks === 0;

  return (
    // Загаловак навігацыі ўжо закрывае верхнюю ўстаўку.
    <Screen edges={['bottom', 'left', 'right']}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {nothingPlayedAtAll
          ?
          <View style={styles.empty}>
            <Text style={[type.body, styles.emptyText]}>Пакуль ніводнай гульні ня пройдзена</Text>
          </View>
          :
          <>
            <GameSection title="ВЫБАР МАЛЮНКА" stats={imageSelectionStats} />
            <GameSection title="ВЫБАР СЛОВА" stats={wordSelectionStats} />
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
  scroll: { flex: 1 },
  content: { padding: space.lg, gap: space.xl },
  section: { gap: space.md },
  sectionTitle: { color: color.inkFaint },
  row: { flexDirection: 'row', gap: space.md },
  rowTile: { flex: 1 },
  empty: { paddingVertical: space.xxxl, alignItems: 'center' },
  emptyText: { color: color.inkMuted, textAlign: 'center' },
  info: { padding: space.lg, borderTopWidth: 1, borderTopColor: color.line },
  infoText: { color: color.inkMuted },
  infoSpaced: { marginTop: space.sm },
  link: { color: color.accent, textDecorationLine: 'underline' },
});
