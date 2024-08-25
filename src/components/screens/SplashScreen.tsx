import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
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

const SplashScreen = () => {
  const progress = useSharedValue(0);
  const yOffsets = RAINBOW_COLORS.map(() => useSharedValue(0));

  useEffect(() => {
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
    <View style={styles.container}>
      <View style={styles.rainbowContainer}>
        {RAINBOW_COLORS.map((_, index) => (
          <AnimatedText
            key={index}
            style={[styles.rainbowLetter, letterStyles[index]]}
          >
            {index === 0 ? 'R' : index === 1 ? 'A' : index === 2 ? 'I' : index === 3 ? 'N' : index === 4 ? 'B' : index === 5 ? 'O' : 'W'}
          </AnimatedText>
        ))}
      </View>
      <Text style={styles.routineText}>Routine</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  rainbowContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  rainbowLetter: {
    fontSize: 50,
    fontWeight: 'bold',
    marginHorizontal: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  routineText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#1E90FF', // Dodger Blue
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
});

export default SplashScreen;