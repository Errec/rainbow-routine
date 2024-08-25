import { useAuth } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

const HomeScreen = () => {
  const { signOut } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut();
      router.replace('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-bold">Home</Text>
      
      <Pressable 
        onPress={handleLogout}
        className="absolute bottom-10 bg-red-500 px-8 py-3 rounded-full"
      >
        <Text className="text-white font-semibold">Logout</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;