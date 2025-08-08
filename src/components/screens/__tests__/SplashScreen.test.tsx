import React from 'react';
import { render } from '@testing-library/react-native';
import SplashScreen from '../SplashScreen';

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock')
);
jest.mock('expo-splash-screen', () => ({
  preventAutoHideAsync: jest.fn(),
  hideAsync: jest.fn(),
}));

describe('SplashScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(<SplashScreen />);
    expect(getByText('Routine')).toBeTruthy();
  });
});
