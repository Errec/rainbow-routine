# Contributing to Rainbow Routine

Thanks for helping Rainbow Routine shine brighter!

## Branch Strategy
- Work off the `main` branch.
- Create feature branches with prefixes such as `feat/`, `fix/`, or `docs/`.
- Open pull requests from your branch into `main`.

## Commit Style
- We follow [Conventional Commits](https://www.conventionalcommits.org/).
- Examples: `feat: add glitter to progress bar`, `fix: stop crash on rainy days`, `docs: clarify install steps`.

## Pre-commit
- Git hooks via Husky run linting and tests on commit.
- Before committing, make sure the hooks pass by running:
  ```bash
  npm run lint
  npm test
  ```
- Format code with `npm run format` when needed.
