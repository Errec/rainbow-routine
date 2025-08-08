/* eslint-disable react/display-name */
import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  ReactNode,
} from 'react';

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
  type AuthContextType = {
    isSignedIn: boolean;
    signIn: () => void;
    signOut: () => void;
  };

  const AuthContext = createContext<AuthContextType | undefined>(undefined);

  AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const signIn = () => setIsSignedIn(true);
    const signOut = () => setIsSignedIn(false);
    return (
      <AuthContext.Provider value={{ isSignedIn, signIn, signOut }}>
        {children}
      </AuthContext.Provider>
    );
  };
  (AuthProvider as React.FC).displayName = 'AuthProvider';

  useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) {
      throw new Error('useAuth must be used within AuthProvider');
    }
    const { isSignedIn, signOut, signIn } = ctx;
    return { isLoaded: true, isSignedIn, signOut, signIn };
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
