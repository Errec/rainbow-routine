import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import SplashScreen from '../components/screens/SplashScreen';

// Commented out Clerk import for development
// import { useAuth } from '@clerk/clerk-expo';

export default function Home() {
  // Commented out Clerk authentication for development
  // const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const splashDuration = 5000; // 5 seconds
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, splashDuration);

    return () => clearTimeout(splashTimer);
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
    return <SplashScreen />;
  }

  return null;
}