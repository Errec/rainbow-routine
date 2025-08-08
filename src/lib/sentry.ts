import * as Sentry from 'sentry-expo';

export function initSentry() {
  if (process.env.SENTRY_DSN && process.env.NODE_ENV !== 'development') {
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
    });
  }
}
