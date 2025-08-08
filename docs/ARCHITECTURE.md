# Architecture

## Directory Structure

- **app/** – screen entries managed by Expo Router.
- **components/** – reusable UI such as `SplashScreen`, `RoutineList`, and list items.
- **hooks/** – custom hooks including `useLetterAnimation` for animated splash text.
- **constants/** – shared constants like `RAINBOW_COLORS`.
- **features/** – domain bundles that group screens, state, and an atomic component structure.

## Feature-Based Atomic Structure

Within `src/features`, each feature encapsulates its own logic and UI. Components inside a feature are broken down following atomic design:

- **atoms** – the smallest visual building blocks.
- **molecules** – atoms combined into slightly more complex widgets.
- **organisms** – assemblies of molecules that form distinct sections of a screen.

This approach keeps routines, auth flows, and future features isolated yet composable.

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
