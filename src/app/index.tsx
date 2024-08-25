import { useAuth } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

// We keep this for debugging purposes
const logTokenCache = {
  getToken: async (key: string) => {
    console.log(`Attempted to get token for key: ${key}`);
    return null;
  },
  saveToken: async (key: string, value: string) => {
    console.log(`Attempted to save token for key: ${key}`);
  },
};

function SplashScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-500">
      <Text className="text-white text-2xl font-bold">Loading...</Text>
    </View>
  );
}

export default function Home() {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.replace('/login');
    } else if (isLoaded && isSignedIn) {
      router.replace('/(tabs)');
    }
  }, [isLoaded, isSignedIn, router]);

  // This is for debugging purposes
  useEffect(() => {
    const testTokenCache = async () => {
      await logTokenCache.getToken('test-key');
      await logTokenCache.saveToken('test-key', 'test-value');
    };
    testTokenCache();
  }, []);

  if (!isLoaded) {
    return <SplashScreen />;
  }

  return null;
}