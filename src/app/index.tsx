import { useAuth } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import SplashScreen from '../components/screens/SplashScreen';

export default function Home() {
  const { isLoaded, isSignedIn } = useAuth();
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
    if (!showSplash && isLoaded) {
      if (!isSignedIn) {
        router.replace('/login');
      } else {
        router.replace('/(tabs)');
      }
    }
  }, [showSplash, isLoaded, isSignedIn, router]);

  if (showSplash || !isLoaded) {
    return <SplashScreen />;
  }

  return null;
}