import { Link } from 'expo-router'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

const App = () => {
  return (
    <View className='flex-1 items-center justify-center'>
      <Pressable>
        <Link href={'/login'}>
          <Text>Login</Text>
        </Link>
      </Pressable>
    </View>
  )
}

export default App