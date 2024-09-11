import { useLetterAnimation } from '@hooks/useLetterAnimation';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

const AnimatedText = Animated.createAnimatedComponent(Text);

const SplashScreenComponent = () => {
  const style0 = useLetterAnimation(0);
  const style1 = useLetterAnimation(1);
  const style2 = useLetterAnimation(2);
  const style3 = useLetterAnimation(3);
  const style4 = useLetterAnimation(4);
  const style5 = useLetterAnimation(5);
  const style6 = useLetterAnimation(6);

  const letterStyles = [style0, style1, style2, style3, style4, style5, style6];

  useEffect(() => {
    const prepareSplashScreen = async () => {
      await SplashScreen.preventAutoHideAsync();
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 3000);
    };

    prepareSplashScreen();
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
                  textShadowColor: 'rgba(0, 0, 0, 0.8)',
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
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
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
