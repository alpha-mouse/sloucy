import { useCallback, useEffect, useState } from 'react';
import ImageSelectionGame from './imageSelection/ImageSelectionGame';
import WordSelectionGame from './wordSelection/WordSelectionGame';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { initializationPromise as imageSelectionInitialization } from './imageSelection/persistence';
import { initializationPromise as wordSelectionInitialization } from './wordSelection/persistence';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './Home';
import { Routes } from './Routes'
import Completion from './Completion';
import Statistics from './Statistics';
import { color, font, fontAssets } from './theme';

SplashScreen.preventAutoHideAsync().catch(() => { });
const Stack = createNativeStackNavigator<Routes>();

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    // Статыстыка абодвух рэжымаў мусіць быць у памяці, а шрыфт - загружаны, да першага кадру.
    Promise.all([
      imageSelectionInitialization,
      wordSelectionInitialization,
      Font.loadAsync(fontAssets),
    ])
      // A failed font load must not hang on the splash screen forever - fall through and let the system font stand in.
      .catch(() => { })
      .then(() => setAppIsReady(true));
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync().catch(() => { });
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ImageSelectionGame" component={ImageSelectionGame} />
          <Stack.Screen name="WordSelectionGame" component={WordSelectionGame} />
          <Stack.Screen name="Completion" component={Completion} />
          <Stack.Screen
            name="Statistics"
            component={Statistics}
            options={{
              headerShown: true,
              title: 'Статыстыка',
              headerBackButtonDisplayMode: 'minimal',
              headerTintColor: color.brand,
              headerStyle: { backgroundColor: color.canvas },
              headerTitleStyle: { fontFamily: font.semiBold, fontSize: 18, color: color.ink },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
