/* eslint-disable react/display-name */
import React, { useCallback, ReactNode } from 'react';
import { useAuthStore } from './store';

let AuthProvider: React.ComponentType<{ children: ReactNode }>;
let useAuth: () => {
  isLoaded: boolean;
  isSignedIn: boolean;
  signOut: () => void;
  signIn: () => void;
};
let useOAuth: (opts?: { strategy?: string }) => {
  startOAuthFlow: () => Promise<{ createdSessionId: string | null }>;
};

if (process.env.EXPO_PUBLIC_USE_CLERK === 'true') {
  const {
    ClerkProvider,
    useAuth: clerkUseAuth,
    useOAuth: clerkUseOAuth,
  } = require('@clerk/clerk-expo');
  const SecureStore = require('expo-secure-store');

  const tokenCache = {
    async getToken(key: string) {
      try {
        return await SecureStore.getItemAsync(key);
      } catch {
        return null;
      }
    },
    async saveToken(key: string, value: string) {
      try {
        await SecureStore.setItemAsync(key, value);
      } catch {
        /* ignore */
      }
    },
  };

  AuthProvider = ({ children }: { children: ReactNode }) => (
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}
      tokenCache={tokenCache}>
      {children}
    </ClerkProvider>
  );
  (AuthProvider as React.FC).displayName = 'AuthProvider';
  useAuth = clerkUseAuth;
  useOAuth = clerkUseOAuth;
} else {
  AuthProvider = ({ children }: { children: ReactNode }) => <>{children}</>;
  (AuthProvider as React.FC).displayName = 'AuthProvider';

  useAuth = () => {
    const { isSignedIn, signIn, signOut } = useAuthStore();
    return { isLoaded: true, isSignedIn, signIn, signOut };
  };

  useOAuth = () => {
    const { signIn } = useAuth();
    const startOAuthFlow = useCallback(async () => {
      signIn();
      return { createdSessionId: 'stub-session' };
    }, [signIn]);
    return { startOAuthFlow };
  };
}

export { AuthProvider, useAuth, useOAuth };
