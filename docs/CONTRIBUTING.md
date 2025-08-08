# Contributing to Rainbow Routine

This guide outlines the process for contributing to the project.

## Branch Strategy

- Work off the `main` branch.
- Create feature branches with prefixes such as `feat/`, `fix/`, or `docs/`.
- Open pull requests from your branch into `main`.

## Commit Style

- We follow [Conventional Commits](https://www.conventionalcommits.org/).
- Examples: `feat: add glitter to progress bar`, `fix: stop crash on rainy days`, `docs: clarify install steps`.

## Pre-commit Hooks and Testing

- Husky runs `lint-staged` on each commit to check formatting and linting.
- Before committing, verify changes locally:
  ```bash
  npm run lint
  npm test
  ```
- Format code with `npm run format` when needed.
