import React from 'react';
import { Pressable, Text, View } from 'react-native';

export default function LoginScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl mb-4">Login Screen</Text>
      <Pressable className="bg-blue-500 px-4 py-2 rounded">
        <Text className="text-white">Login</Text>
      </Pressable>
    </View>
  );
}