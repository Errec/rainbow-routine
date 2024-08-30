import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { Dimensions, ImageBackground, Text, View } from 'react-native';
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const RAINBOW_COLORS = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#8B00FF', '#FF00FF'];

const AnimatedText = Animated.createAnimatedComponent(Text);

const SplashScreenComponent = () => {
  const progress = useSharedValue(0);
  const yOffsets = RAINBOW_COLORS.map(() => useSharedValue(0));

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();

    progress.value = withRepeat(
      withTiming(1, { duration: 3000, easing: Easing.linear }),
      -1,
      true
    );

    yOffsets.forEach((offset, index) => {
      offset.value = withRepeat(
        withTiming(5, { duration: 1000 + index * 100, easing: Easing.inOut(Easing.ease) }),
        -1,
        true
      );
    });

    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 3000);
  }, []);

  const letterStyles = RAINBOW_COLORS.map((_, index) =>
    useAnimatedStyle(() => {
      const colorIndex = (index + Math.floor(progress.value * RAINBOW_COLORS.length)) % RAINBOW_COLORS.length;
      const nextColorIndex = (colorIndex + 1) % RAINBOW_COLORS.length;
      const color = interpolateColor(
        progress.value * RAINBOW_COLORS.length - Math.floor(progress.value * RAINBOW_COLORS.length),
        [0, 1],
        [RAINBOW_COLORS[colorIndex], RAINBOW_COLORS[nextColorIndex]]
      );
      return {
        color: index === 3 ? '#FF00FF' : color, // Keep 'N' magenta
        transform: [{ translateY: yOffsets[index].value }],
      };
    })
  );

  return (
    <ImageBackground
      source={require('../../../assets/images/splash1.png')}
      className="flex-1 justify-center items-center"
      resizeMode="cover"
    >
      <View className="flex-1 justify-center items-center">
        <View className="flex-row mb-5 bg-blue-200 rounded-md p-2">
          {RAINBOW_COLORS.map((_, index) => (
            <AnimatedText
              key={index}
              style={[
                letterStyles[index], 
                { 
                  textShadowColor: 'rgba(0, 0, 0, 0.8)', 
                  textShadowOffset: { width: 3, height: 3 }, 
                  textShadowRadius: 4 
                }
              ]}
              className="text-5xl font-bold mx-1"
            >
              {index === 0 ? 'R' : index === 1 ? 'A' : index === 2 ? 'I' : index === 3 ? 'N' : index === 4 ? 'B' : index === 5 ? 'O' : 'W'}
            </AnimatedText>
          ))}
        </View>
        <Text
          className="bg-orange-200 rounded-md p-2 text-4xl font-bold text-blue-500"
          style={{
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 3,
          }}
        >
          Routine
        </Text>
      </View>
    </ImageBackground>
  );
};

export default SplashScreenComponent;
