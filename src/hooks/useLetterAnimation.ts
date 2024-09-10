import { RAINBOW_COLORS } from '@/constants/colors';
import { useEffect } from 'react';
import {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export const useLetterAnimation = (index: number) => {
  const progress = useSharedValue(0);
  const yOffset = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, { duration: 3000, easing: Easing.linear }),
      -1,
      true
    );
    yOffset.value = withRepeat(
      withTiming(5, {
        duration: 1000 + index * 100,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true
    );
  }, [index, progress, yOffset]);

  const style = useAnimatedStyle(() => {
    const colorIndex =
      (index + Math.floor(progress.value * RAINBOW_COLORS.length)) %
      RAINBOW_COLORS.length;
    const nextColorIndex = (colorIndex + 1) % RAINBOW_COLORS.length;
    const color = interpolateColor(
      progress.value * RAINBOW_COLORS.length -
        Math.floor(progress.value * RAINBOW_COLORS.length),
      [0, 1],
      [RAINBOW_COLORS[colorIndex], RAINBOW_COLORS[nextColorIndex]]
    );
    return {
      color: index === 3 ? '#FF00FF' : color, // Keep 'N' magenta
      transform: [{ translateY: yOffset.value }],
    };
  });

  return style;
};
