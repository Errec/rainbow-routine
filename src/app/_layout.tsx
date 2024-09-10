import { Slot } from 'expo-router';
import React from 'react';
import { ImageBackground, View } from 'react-native';

// Commented out Clerk-related code
/*
import { ClerkProvider } from "@clerk/clerk-expo";
import * as SecureStore from 'expo-secure-store';

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};
*/

export default function RootLayout() {
  return (
    // Commented out ClerkProvider
    // <ClerkProvider
    //   publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    //   tokenCache={tokenCache}
    // >
    <ImageBackground
      source={require('@assets/images/bg01.png')}
      className='flex-1'
      resizeMode='cover'>
      <View className='flex-1 bg-white/50'>
        <Slot />
      </View>
    </ImageBackground>
    // </ClerkProvider>
  );
}
