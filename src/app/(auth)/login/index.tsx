import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'
import { useRouter } from 'expo-router'
import * as WebBrowser from 'expo-web-browser'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()

const LoginScreen = () => {
  useWarmUpBrowser()
  const router = useRouter()

  const { startOAuthFlow: startGoogleOAuthFlow } = useOAuth({ strategy: 'oauth_google' })
  const { startOAuthFlow: startAppleOAuthFlow } = useOAuth({ strategy: 'oauth_apple' })

  const onOAuthPress = React.useCallback(async (startOAuthFlow: typeof startGoogleOAuthFlow) => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/(tabs)', { scheme: 'your-app-scheme' }),
      })

      if (createdSessionId) {
        setActive!({ session: createdSessionId })
        router.push('/(tabs)')
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err)
    }
  }, [router])

  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-2xl mb-8 font-bold">Welcome</Text>
      
      <Pressable 
        onPress={() => onOAuthPress(startGoogleOAuthFlow)}
        className="bg-white px-8 py-3 rounded-full shadow-md mb-4 w-64 flex-row items-center justify-center"
      >
        <Text className="text-black font-semibold">Sign in with Google</Text>
      </Pressable>
      
      <Pressable 
        onPress={() => onOAuthPress(startAppleOAuthFlow)}
        className="bg-black px-8 py-3 rounded-full shadow-md w-64 flex-row items-center justify-center"
      >
        <Text className="text-white font-semibold">Sign in with Apple</Text>
      </Pressable>
    </View>
  )
}

export default LoginScreen