import SplashScreenComponent from '@/components/screens/SplashScreen';
import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/auth/provider';

export default function Home() {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Prevent the splash screen from auto-hiding
    SplashScreen.preventAutoHideAsync();

    const prepareApp = async () => {
      // Simulate loading time or wait for necessary async tasks
      await new Promise((resolve) => setTimeout(resolve, 3500)); // Replace this with actual loading logic

      // Hide the splash screen
      await SplashScreen.hideAsync();

      // Set the splash screen state to false
      setShowSplash(false);
    };

    prepareApp();
  }, []);

  useEffect(() => {
    if (!showSplash && isLoaded) {
      if (isSignedIn) {
        router.replace('/(tabs)');
      } else {
        router.replace('/login');
      }
    }
  }, [showSplash, isLoaded, isSignedIn, router]);

  if (showSplash) {
    return <SplashScreenComponent />;
  }

  return null;
}
