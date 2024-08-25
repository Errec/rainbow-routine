import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#3b82f6', // Tailwind blue-500
        tabBarInactiveTintColor: '#6b7280', // Tailwind gray-500
        tabBarStyle: {
          backgroundColor: '#ffffff', // Tailwind white
        },
        headerStyle: {
          backgroundColor: '#3b82f6', // Tailwind blue-500
        },
        headerTintColor: '#ffffff', // Tailwind white
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      {/* Add more tab screens here as needed */}
    </Tabs>
  );
}