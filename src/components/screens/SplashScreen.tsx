import { useLetterAnimation } from '@hooks/useLetterAnimation';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { colors } from '@/theme';

const AnimatedText = Animated.createAnimatedComponent(Text);

const SplashScreenComponent = () => {
  const letterStyles = Array.from(
    { length: 7 },
    (_, i) => useLetterAnimation(i) // eslint-disable-line react-hooks/rules-of-hooks
  );

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const prepareSplashScreen = async () => {
      await SplashScreen.preventAutoHideAsync();
      timeoutId = setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 3000);
    };

    prepareSplashScreen();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <ImageBackground
      source={require('@assets/images/splash.png')}
      className='flex-1 justify-center items-center'
      resizeMode='cover'>
      <View className='flex-1 justify-center items-center'>
        <View className='flex-row mb-5 bg-blue-200 rounded-md p-2'>
          {'RAINBOW'.split('').map((letter, index) => (
            <AnimatedText
              key={index}
              style={[
                letterStyles[index],
                {
                  textShadowColor: colors.black80,
                  textShadowOffset: { width: 3, height: 3 },
                  textShadowRadius: 4,
                },
              ]}
              className='text-5xl font-bold mx-1'>
              {letter}
            </AnimatedText>
          ))}
        </View>
        <Text
          className='bg-orange-200 rounded-md p-2 text-4xl font-bold text-blue-500'
          style={{
            textShadowColor: colors.black75,
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 3,
          }}>
          Routine
        </Text>
      </View>
    </ImageBackground>
  );
};

export default SplashScreenComponent;
