import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Routes } from './Routes';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<Routes, 'Home'>;

const Home = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <TouchableHighlight
        style={{ ...styles.takeAllSpace, ...styles.gameButtons }}
        onPress={() => navigation.navigate('ImageSelectionGame')}>
        <Text style={styles.gameButton}>згуляць</Text>
      </TouchableHighlight>
    </View>
  );
};


export default Home;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column-reverse',
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
    color: '#A92B1F',
  },
});
