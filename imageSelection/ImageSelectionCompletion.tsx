import { StyleSheet, View, Text, TouchableHighlight, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Routes } from './../Routes';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Svg, { Path } from "react-native-svg"
import { pluralize } from '../linguistics';
import * as constants from './../constants';

type Props = NativeStackScreenProps<Routes, 'ImageSelectionCompletion'>;

const okColor = '#1F2BA9'

const ImageSelectionCompletion = ({ route, navigation }: Props) => {

  const { isPerfect, newWordsSeen } = route.params;

  return (
    <View style={styles.container}>
      <StatusBar />
      <TouchableHighlight
        style={{ ...styles.takeAllSpace, ...styles.gameCompletion }}
        underlayColor={constants.underlay}
        onPress={() => navigation.goBack()}>
          <View style={{ display:'flex', alignItems: 'center' }}>
            <Svg
              width={200}
              height={200}
              viewBox="118 118 50 50"
            >
              <Path d="m139.016 164.276 4.119-4.078 4.073 4.074-4.085 3.967zm-5.954-9.398 8.996-8.985-.02 8.99-8.976 9.183zm11.14.006-.028-8.994 9.01 9.009-.146 9.118zm-12.536-10.452h9.173l-9.232 8.975-8.996.012zm13.7.014 9.2-.014 9.055 8.987-8.995-.016zm-26.85-.724 3.855-4.04 4.077 4.101-4.102 4.062zm41.268.036 3.956-3.929.693.648 3.29 3.405-3.85 3.99zm-19.309.025 2.69-2.724 2.61 2.68-2.652 2.545zm2.643-1.322-1.165 1.165 1.258 1.339 1.243-1.168zm-19.817-8.36 8.57.03 8.73 8.714-8.994-.02zm31.06.045 8.952-.052-8.687 8.73-8.996.02zm-21.272-1.752-.018-8.996 8.987 9.055-.066 9.067zm11.085-.006 8.996-8.984-.024 8.99-8.971 9.226zm-5.15-9.392 4.055-4.054 4.087 4.074-4.056 3.954z"
                    fill={isPerfect ? constants.brand : okColor } />
            </Svg>
            <Text style={{ ...styles.successText, color: isPerfect ? constants.brand : okColor }}>{ isPerfect ? 'Ідэальна!' : 'Пройдзена!' }</Text>
            {
              newWordsSeen ? <Text style={styles.successText}>{ newWordsSeen + ' ' + pluralize(newWordsSeen, 'новае слова', 'новыя словы', 'новых словаў') }</Text> : null
            }
          </View>
      </TouchableHighlight>
    </View>
  );
};


export default ImageSelectionCompletion;

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
  gameCompletion: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  successText: {
    fontSize: 30,
    textAlign: 'center',
  },
});
