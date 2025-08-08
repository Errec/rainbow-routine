import { Slot } from 'expo-router';
import React from 'react';
import { ImageBackground, View } from 'react-native';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';
import { initSentry } from '@/lib/sentry';
import { AuthProvider } from '@features/auth/provider';
import ErrorBoundary from '@/components/ErrorBoundary';

initSentry();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ImageBackground
          source={require('@assets/images/bg01.png')}
          className='flex-1'
          resizeMode='cover'>
          <View className='flex-1 bg-white/50'>
            <ErrorBoundary>
              <Slot />
            </ErrorBoundary>
          </View>
        </ImageBackground>
      </AuthProvider>
    </QueryClientProvider>
  );
}
