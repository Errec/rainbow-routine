import React, { useEffect } from 'react';
import { Animated, View } from 'react-native';

type SplashScreenProps = {
  onFinish: () => void;
};

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const opacity = new Animated.Value(0);

  useEffect(() => {
    const fadeIn = Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    });

    const fadeOut = Animated.timing(opacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    });

    Animated.loop(
      Animated.sequence([fadeIn, fadeOut])
    ).start();

    // Simulated API call
    const timer = setTimeout(onFinish, 1000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View className="flex-1 items-center justify-center bg-yellow-400">
      <Animated.Text 
        className="text-3xl font-bold"
        style={{ opacity }}
      >
        Hello
      </Animated.Text>
    </View>
  );
}