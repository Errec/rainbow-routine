# Rainbow Routine

Rainbow Routine is an early-stage Augmentative and Alternative Communication (AAC) app built with Expo and React Native. It focuses on fast, customizable communication through symbol grids, text entry, and routine building.

![Splash screen](assets/images/splash.png)

## Architecture Overview

- **Navigation:** Expo Router with screens located under the `app` directory.
- **UI Components:** Reusable UI in `components` and shared constants in `constants`.
- **Styling:** [NativeWind](https://www.nativewind.dev/) for Tailwind-like classes.
- **Animation & Validation:** React Native Reanimated animations and schema validation with [Zod](https://zod.dev/).

## Environment Setup

1. Ensure you have Node.js 18+ and npm installed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npx expo start
   ```

### Linting & Type Checks

```bash
npm run lint
npm run ts:check
```

### Building

Use [EAS Build](https://docs.expo.dev/eas/) for production binaries:

```bash
eas build
```

## Environment Variables

- `EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY` – Clerk publishable key when using Clerk authentication.
- `EXPO_PUBLIC_USE_CLERK` – set to `true` to enable Clerk; otherwise a local stub auth will be used.

## Roadmap

- Detailed card tab for symbol-based communication
- Grid navigation with search
- Asset store and card list management
- Routine flow tab for daily schedules
- Multilingual support
- Error boundaries and enhanced validation with Zod
- React Query for caching and data management
