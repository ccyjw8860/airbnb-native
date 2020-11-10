import React, { useState } from "react";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import { Text, Image } from "react-native";
import {Ionicons} from '@expo/vector-icons'
import * as Font from 'expo-font';
import Gate from './components/Gate'
import { Provider } from "react-redux";
import store, { persistor } from './redux/store'
import { PersistGate } from "redux-persist/integration/react";

const cacheImages = images =>{
  return images.map(image => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  })
}

const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font))

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const handleFinish = () => setIsReady(true);
  const loadAssets = () => {
    const images = [
      require("./assets/main_bg1.png"),
      "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-219x286.png",
      require('./assets/default_house.jpg')
    ];
    const fonts = [Ionicons.font]
    const imagePromises = cacheImages(images);
    const fontPromises = cacheFonts(fonts);

    return Promise.all([...imagePromises, ...fontPromises])
  };
  return isReady ? (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Gate/>
      </PersistGate>
    </Provider>
  ) : (
    <AppLoading
      onError={console.error}
      onFinish={handleFinish}
      startAsync={loadAssets}
    />
  );
}
