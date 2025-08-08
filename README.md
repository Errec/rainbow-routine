# Rainbow Routine 🌈

Rainbow Routine is an open-source Augmentative and Alternative Communication (AAC) app built with Expo and React Native. It helps autistic children and caregivers manage daily communication through configurable symbol grids, text input, and routine planning.

![Splash screen](assets/images/splash.png)

## Project Goal and Key Features

- Provide a customizable AAC tool for everyday communication.
- Support symbol grids, text entry, and routine planning.
- Run on iOS, Android, and web through Expo.

## Folder Structure and Architecture Summary

- `src/app` – Expo Router screens.
- `src/components` – reusable UI components.
- `src/constants` – shared constants.
- `src/features` – domain features and state management.
- `src/hooks` – custom hooks.
- `src/lib` – utilities and libraries.
- `src/theme` – theme configuration.
- `assets` – images and other static assets.
- `docs` – additional documentation.

## Environment Variables and Configuration

1. Ensure Node.js 18+ and npm are installed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create an environment file:
   ```bash
   cp .env.example .env.local
   ```
4. Set the following variables:
   - `EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY` – Clerk publishable key.
   - `EXPO_PUBLIC_USE_CLERK` – set to `true` to enable Clerk authentication.
   - `SENTRY_DSN` – Sentry DSN for error tracking.

## Commands 🛠️

### Development

```bash
npm start
```

### Testing

```bash
npm test
```

### Linting and Type Checking

```bash
npm run lint
npm run ts:check
```

### Building

```bash
eas build
```

## Contribution Guidelines and Licensing

- See [CONTRIBUTING.md](CONTRIBUTING.md) for workflow and commit conventions.
- Licensed under the [MIT License](LICENSE).

## Roadmap

- Detailed card tab for symbol-based communication
- Grid navigation with search
- Asset store and card list management
- Routine flow tab for daily schedules
- Multilingual support
- Error boundaries and enhanced validation with Zod
- React Query for caching and data management
