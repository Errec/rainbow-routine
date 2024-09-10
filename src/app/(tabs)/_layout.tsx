import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#3b82f6', // Tailwind blue-500
        tabBarInactiveTintColor: '#6b7280', // Tailwind gray-500
        tabBarStyle: {
          backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white
        },
        headerStyle: {
          backgroundColor: 'transparent', // Make header transparent
        },
        headerTintColor: '#000000', // Black text for better visibility
      }}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
