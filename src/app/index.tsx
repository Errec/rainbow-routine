import SplashScreenComponent from '@/components/screens/SplashScreen';
import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';

// Commented out Clerk import for development
// import { useAuth } from '@clerk/clerk-expo';

export default function Home() {
  // Commented out Clerk authentication for development
  // const { isLoaded, isSignedIn } = useAuth();
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
    if (!showSplash) {
      console.log('Navigating to login screen');
      router.replace('/login');

      // Original Clerk authentication logic (commented out)
      /*
      if (isLoaded && !isSignedIn) {
        router.replace('/login');
      } else if (isLoaded && isSignedIn) {
        router.replace('/(tabs)');
      }
      */
    }
  }, [showSplash, router]);

  if (showSplash) {
    return <SplashScreenComponent />;
  }

  return null;
}
