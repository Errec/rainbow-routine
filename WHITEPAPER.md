# Rainbow Routine Whitepaper

## One-liner

Rainbow Routine is an Augmentative and Alternative Communication (AAC) app offering symbol grids, quick phrases, and text entry. It is fully customizable, supports multiple input methods, text‑to‑speech, cloud sync, and multilingual interfaces.

## Goals

- Provide fast, low-friction communication.
- Enable editable and shareable page sets across devices.
- First-class accessibility and offline functionality.
- Native assistant integration (Siri/App Intents, Android App Actions).
- Privacy-first design with enterprise-grade sync.

## Navigation & Flow

- Onboarding: choose page set, access method, language/voice, optional sync login.
- App shell: bottom tabs with per-tab stack navigation.
- Core words: color-coded grid with persistent message bar.
- Quick phrases, topics with word lists and categories, keyboard with word prediction.
- Dashboard for editing, access settings, schedules, sync.
- Search bar for instant word/page lookups.
- Edit mode with drag-and-drop and import/export.
- Scan mode overlays for switch/eye-gaze access.
- Deep links and shortcuts.

## Feature Set

- Page sets: Core First, Motor Plan, Text, Scanning, Aphasia.
- Symbol and text modes.
- Multiple access methods: touch, switch, scanning, eye-gaze.
- Behavioral supports: schedules, timers, scripts.
- Cloud sync and sharing with roles.
- Multilingual interface and TTS.
- Assistant integrations.

_Repository status: project scaffolding is in place; features above are under active development._

## Architecture

- **App Layer:** Expo managed workflow with Expo Router.
- **UI:** NativeWind, Reanimated, Gesture Handler, FlashList for grids, SVG symbols.
- **State:** lightweight UI store plus server cache layer (planned).
- **Data:** local-first database with conflict-aware sync (planned).
- **I/O:** TTS, haptics, file system access, background tasks.
- **Access Abstraction:** unified input adapter for touch, switch, scanning, eye-gaze.
- **Security:** per-user keys for end-to-end encrypted shares.
- **Testing/CI:** unit, accessibility, E2E tests; EAS builds and OTA updates.

## Data Model (high level)

```
User { id, locale, voices[], accessPrefs, shareKeys }
PageSet { id, name, type, locale, theme, gridSpec }
Page { id, pageSetId, title, rows, cols, scanConfig }
Button { id, pageId, label, symbolRef, action, phraseText, color, a11yHints }
Symbol { id, pack, key, uri, altText }
Schedule { id, steps[], alarms }
Share { pageSetId, members[], role }
```

Telemetry is opt-in and redacted.

## Accessibility Checklist

- Focusable cells and large targets.
- High-contrast and color-blind friendly themes.
- Screen reader labels and haptic/audio cues.
- Scan mode timing curves and switch mapping.
- Eye-gaze dwell timers and adjustable key repeat.

## Tech Stack Options

- React Native (Expo).
- Navigation via Expo Router.
- NativeWind for styling.
- FlashList for large grids.
- State management via Zustand/Jotai/Redux Toolkit (to be decided).
- Server cache via TanStack Query or RTK Query.
- Local data via expo-sqlite, WatermelonDB, or Realm.
- Backend options: Firebase, Supabase, Hasura, Appwrite, or AWS Amplify.
- Auth via Firebase Auth, Supabase Auth, Cognito, or OIDC providers.
- Symbol assets via CDN with pluggable packs.
- TTS via expo-speech or platform TTS.
- Monitoring via Sentry/Bugsnag; analytics via Amplitude/Mixpanel/PostHog.
- Testing with Jest, Detox/Maestro, accessibility checks via axe-core.
- CI/CD through EAS Build and Expo Updates.

## Performance Targets

- Cold start to first utterance <2s on mid-range devices.
- Grid rendering under 16ms/frame with symbol caching.
- Lazy-load heavy assets and virtualize lists.

## Privacy & Compliance

- Opt-in telemetry; no utterance content sent by default.
- End-to-end encryption for shared page sets.
- Data residency toggle; support for GDPR/LGPD/COPPA/FERPA.

## Success Metrics

- Time to first spoken phrase.
- Setup time to first customized page set.
- Crash-free users percentage.
- TTS latency and offline reliability.
- Accessibility audit pass rates.

## Risks & Mitigations

- Eye-gaze variability: abstracted input adapter, dwell fallback, vendor SDK isolation.
- Symbol licensing: ship open set, licensed packs via keys.
- Sync conflicts: optimistic UI with reconciliation or CRDT.
- Performance on low-end devices: asset downscaling and caching, optional "lite" theme.
- Vendor lock-in: backend repository pattern for swappable services.

## Roadmap

1. **MVP:** core words, quick phrases, topics, keyboard, TTS, local edit/save, high-contrast themes.
2. **Sync & Share:** accounts, backups, caregiver roles, import/export.
3. **Access Features:** scan mode, switch control, assistant integrations.
4. **Eye-Gaze & Behavioral Supports:** schedules, timers, scripts.
5. **AI Assist (opt-in):** translation workflow, smart phrase suggestions.
