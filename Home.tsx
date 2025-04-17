import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Routes } from './Routes';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as constants from './constants';
import * as ScreenOrientation from 'expo-screen-orientation';
import { isOrientationPortrait } from './utils';

type Props = NativeStackScreenProps<Routes, 'Home'>;

const Home = ({ navigation }: Props) => {

  var [isPortrait, setIsPortrait] = useState(true);

  useEffect(() => {
    ScreenOrientation.getOrientationAsync()
      .then(orientation => setIsPortrait(isOrientationPortrait(orientation)))

    const subscription = ScreenOrientation.addOrientationChangeListener(event =>
      setIsPortrait(isOrientationPortrait(event.orientationInfo.orientation)))
    return () => ScreenOrientation.removeOrientationChangeListener(subscription);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar />
      <TouchableHighlight
        style={{ ...styles.takeAllSpace, ...styles.gameButtons }}
        underlayColor={constants.underlay}
        onPress={() => navigation.navigate('ImageSelectionGame')}>
        <Text style={styles.gameButton}>Згуляць</Text>
      </TouchableHighlight>
      <View style={{ height: isPortrait ? '9%' : '6%', }}>
        <TouchableHighlight
          style={{...styles.takeAllSpace, justifyContent: 'center', padding: 10,}}
          underlayColor={constants.underlay}
          onPress={() => navigation.navigate('Statistics')}>
          <Text>Статыстыка</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};


export default Home;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
  },
  takeAllSpace: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  gameButtons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  gameButton: {
    fontSize: 30,
    color: constants.brand,
  },
});
