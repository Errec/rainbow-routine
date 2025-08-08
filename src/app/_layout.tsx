import { Slot } from 'expo-router';
import * as Sentry from 'sentry-expo';
import React from 'react';
import { ImageBackground, View } from 'react-native';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';
import { AuthProvider } from '@features/auth/provider';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
});

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
