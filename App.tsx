import React, { useCallback, useEffect, useState } from 'react';
import ImageSelectionGame from './imageSelection/ImageSelectionGame';
import { SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { initializationPromise } from './imageSelection/persistence';

SplashScreen.preventAutoHideAsync();

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
    <SafeAreaView onLayout={onLayoutRootView}>
      <ImageSelectionGame />
    </SafeAreaView>
  );
};

export default App;
