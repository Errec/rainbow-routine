# Architecture

## Directory Structure
- **app/** – screen entries managed by Expo Router.
- **components/** – reusable UI such as `SplashScreen`, `RoutineList`, and list items.
- **hooks/** – custom hooks including `useLetterAnimation` for animated splash text.
- **constants/** – shared constants like `RAINBOW_COLORS`.

## Technologies
- [Expo](https://expo.dev) and React Native.
- [Expo Router](https://expo.github.io/router/docs) for file-based navigation.
- [NativeWind](https://www.nativewind.dev/) for Tailwind-style styling.
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) for animations.
- [Zod](https://zod.dev/) for runtime validation in components.

## Data Flow
The current prototype uses static placeholder data. Future work will introduce a local-first database with conflict-aware sync and cloud sharing.

## Build & Deployment
Run the development server with `npx expo start` and build production binaries through [EAS Build](https://docs.expo.dev/eas/).
