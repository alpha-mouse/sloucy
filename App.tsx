import React, { useCallback, useEffect, useState } from 'react';
import ImageSelectionGame from './imageSelection/ImageSelectionGame';
import * as SplashScreen from 'expo-splash-screen';
import { initializationPromise } from './imageSelection/persistence';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './Home';
import { Routes } from './Routes'
import ImageSelectionCompletion from './imageSelection/ImageSelectionCompletion';
import Statistics from './Statistics';

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator<Routes>();

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    initializationPromise.then(_ => setAppIsReady(true))
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <NavigationContainer >
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ImageSelectionGame" component={ImageSelectionGame} />
          <Stack.Screen name="ImageSelectionCompletion" component={ImageSelectionCompletion} />
          <Stack.Screen name="Statistics" component={Statistics} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
