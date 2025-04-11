import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Routes } from './Routes';
import { Link } from 'expo-router';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as constants from './constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getStats } from './imageSelection/persistence';
import vocabulary from './imageSelection/vocabulary';
import * as ScreenOrientation from 'expo-screen-orientation';
import { isOrientationPortrait } from './utils';

type Props = NativeStackScreenProps<Routes, 'Statistics'>;

const Statistics = ({ navigation }: Props) => {

  var [isPortrait, setIsPortrait] = useState(true);

  useEffect(() => {
    ScreenOrientation.getOrientationAsync()
      .then(orientation => setIsPortrait(isOrientationPortrait(orientation)))

    const subscription = ScreenOrientation.addOrientationChangeListener(event =>
      setIsPortrait(isOrientationPortrait(event.orientationInfo.orientation)))
    return () => ScreenOrientation.removeOrientationChangeListener(subscription);
  }, []);

  const stats = getStats();
  const statsAreEmpty = stats.attemptClicks === 0;
  const totalWords = vocabulary.length;
  const perfectedPercentage = statsAreEmpty ? 0 : stats.perfectedWords.length / totalWords * 100;
  const seenPercentage = statsAreEmpty ? 0 : stats.seenWords.length / totalWords * 100;
  const mastery = statsAreEmpty ? 0 : stats.successClicks / stats.attemptClicks * 100;

  return (
    <SafeAreaView style={{ ...styles.container }}>
      <View style={{ height: isPortrait ? '9%' : '6%', }}>
        <TouchableHighlight
          style={styles.button}
          underlayColor={constants.underlay}
          onPress={() => navigation.navigate('Home')}>
          <Text>назад</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.stats}>
        { statsAreEmpty
          ?
            <Text style={styles.statText}>пакуль ні адной гульні ня пройдзена</Text>
          :
            <View>
              <Text style={styles.statText}>гульняў пройдзена: {stats.runsCompleted}</Text>
              <Text style={styles.statText}>словаў вывучана: {stats.perfectedWords.length} ({perfectedPercentage.toFixed(2)}%)</Text>
              <Text style={styles.statText}>словаў пабачана: {stats.seenWords.length} ({seenPercentage.toFixed(2)}%)</Text>
              <Text style={styles.statText}>майстэрства: {mastery.toFixed(2)}%</Text>
            </View>
        }
      </View>
      <View style={styles.info}>
        <Text>Зыходны код на GitHub:</Text>
        <Text><Link style={styles.link} href="https://github.com/alpha-mouse/sloucy">https://github.com/alpha-mouse/sloucy</Link>.</Text>
        <Text>Заўвагам і прапановам я таксама буду там вельмі рады ❤️.</Text>
      </View>
    </SafeAreaView>
  );
};

export default Statistics;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    padding: 10,
  },
  stats: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  info: {
    flex: 0.2,
    padding: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: constants.underlay,
  },
  statText: {
    fontSize: 16,
  },
  link: {
    color: constants.linkColor,
    textDecorationLine: 'underline',
  },
});
