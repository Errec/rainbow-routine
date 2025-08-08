import { useRouter } from 'expo-router';
import React from 'react';
import { ImageBackground, Pressable, Text, View } from 'react-native';
import { useAuth } from '@/auth/provider';

const HomeScreen = () => {
  const { signOut } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.replace('/login');
  };

  return (
    <ImageBackground
      source={require('@assets/images/bg01.png')}
      style={{ flex: 1, width: '100%', height: '100%' }}
      resizeMode='cover'>
      <View style={{ flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
        <View className='flex-1 items-center justify-center'>
          <Text className='text-3xl font-bold text-gray-800'>Home</Text>

          <Pressable
            onPress={handleLogout}
            className='absolute bottom-10 bg-red-500 px-8 py-3 rounded-full'>
            <Text className='text-white font-semibold'>Logout</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
