import { useRouter } from 'expo-router';
import React from 'react';
import SplashScreen from '../components/screens/SplashScreen';

export default function Home() {
  const router = useRouter();

  const handleSplashFinish = () => {
    router.replace('/login');
  };

  return <SplashScreen onFinish={handleSplashFinish} />;
}