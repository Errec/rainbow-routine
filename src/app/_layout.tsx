import { Slot } from 'expo-router';
import React from 'react';
import { ImageBackground, View } from 'react-native';
import { AuthProvider } from '@features/auth/provider';

export default function RootLayout() {
  return (
    <AuthProvider>
      <ImageBackground
        source={require('@assets/images/bg01.png')}
        className='flex-1'
        resizeMode='cover'>
        <View className='flex-1 bg-white/50'>
          <Slot />
        </View>
      </ImageBackground>
    </AuthProvider>
  );
}
