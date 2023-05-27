import React, { useCallback, useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import Navigation from './src/components/Navigation';
import { AuthProvider } from './src/context/AuthContext';
import { ToastProvider } from 'react-native-toast-notifications';
import { Platform, StatusBar, View, Text } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    'back-groove': require('./assets/fonts/back-groove.ttf'),
  });

  return (
    <ToastProvider
      successColor='#8bc63f'
      offsetTop={Platform.OS === 'ios'? 60 : 10}
      renderType={{
        custom: (toast) => (
          <View
          style={{
            paddingTop: 15,
            paddingBottom: 15,
            paddingRight: 30,
            paddingLeft: 30,
            borderRadius: 10,
            marginBottom: 5,
            backgroundColor: '#8bc63f'
          }}>
            <Text style={{color: '#ffffff'}}>{toast.message}</Text>
          </View>
        )
      }}
    >
      <AuthProvider>
        <Navigation/>
      </AuthProvider>
    </ToastProvider>
  );
}