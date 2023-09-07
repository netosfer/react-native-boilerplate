import React, { Component, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import AppRouter from './src';
import 'react-native-gesture-handler';
import { useFonts, Syne_400Regular, Syne_600SemiBold, Syne_700Bold } from '@expo-google-fonts/syne';
import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import * as SplashScreen from "expo-splash-screen";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './src/locales/en.json';
import tr from './src/locales/tr.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    tr: { translation: tr },
  },
  lng: 'tr', // Varsayılan dil
  fallbackLng: 'tr', // Hata durumunda kullanılacak dil
  interpolation: {
    escapeValue: false, // Özel değerleri HTML kodlarına dönüştürme
  },
});

export default function App() {
  let [fontsLoaded] = useFonts({
    Syne_400Regular,
    Syne_600SemiBold,
    Syne_700Bold,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <AppRouter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Inter_600SemiBold'
  },
});
