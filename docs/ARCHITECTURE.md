# Architecture

## Directory Structure

- **app/** – screen entries managed by Expo Router.
- **components/** – reusable UI such as `SplashScreen`, `RoutineList`, and list items.
- **hooks/** – custom hooks including `useLetterAnimation` for animated splash text.
- **constants/** – shared constants like `RAINBOW_COLORS`.
- **features/** – domain bundles that group screens, state, and an atomic component structure.

## Feature Modules and Atomic Layers

`src/features` groups code by domain. Each feature owns its screens, hooks, state and an internal component library. Components are organised into atomic design layers:

- **atoms** – minimal visual elements such as buttons or icons.
- **molecules** – small components composed of atoms.
- **organisms** – sections built from molecules.

This structure keeps features encapsulated while allowing pieces to be composed across the app.

## State and Data Management

Local state is handled with [Zustand](https://github.com/pmndrs/zustand) stores scoped to each feature. Remote data and caching are managed by [TanStack Query](https://tanstack.com/query/latest), which coordinates fetching and background updates. Together they keep UI components focused on rendering.

## Theme Token Management

Design tokens for colours and typography live in `src/theme` and feed both Tailwind and runtime styles. Maintaining tokens in one place ensures consistent theming across components and simplifies future dark-mode or branding work.

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
