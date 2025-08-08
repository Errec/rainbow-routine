import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, Pressable, Text, View } from 'react-native';
import { useOAuth } from '@features/auth/provider';

const LoginScreen = () => {
  const router = useRouter();
  const { startOAuthFlow: startGoogleOAuthFlow } = useOAuth({
    strategy: 'oauth_google',
  });
  const { startOAuthFlow: startAppleOAuthFlow } = useOAuth({
    strategy: 'oauth_apple',
  });

  const onOAuthPress = React.useCallback(
    async (
      startOAuthFlow: () => Promise<{ createdSessionId: string | null }>
    ) => {
      try {
        const { createdSessionId } = await startOAuthFlow();
        if (createdSessionId) {
          router.replace('/(tabs)');
        }
      } catch (error) {
        const message =
          error instanceof Error ? error.message : 'Please try again.';
        Alert.alert('Authentication failed', message);
      }
    },
    [router]
  );

  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-3xl mb-8 font-bold text-gray-800'>Welcome</Text>

      <Pressable
        onPress={() => onOAuthPress(startGoogleOAuthFlow)}
        className='bg-white px-8 py-3 rounded-full shadow-md mb-4 w-72 flex-row items-center'>
        <View className='flex-1 flex-row items-center justify-between px-2'>
          <Text className='text-black font-semibold text-lg'>
            Sign in with Google
          </Text>
          <Ionicons name='logo-google' size={24} color='black' />
        </View>
      </Pressable>

      <Pressable
        onPress={() => onOAuthPress(startAppleOAuthFlow)}
        className='bg-black px-8 py-3 rounded-full shadow-md w-72 flex-row items-center'>
        <View className='flex-1 flex-row items-center justify-between px-2'>
          <Text className='text-white font-semibold text-lg'>
            Sign in with Apple
          </Text>
          <Ionicons name='logo-apple' size={24} color='white' />
        </View>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
