# Commit Convention Guide

This project uses **emoji-based commit conventions** to make the commit history more readable and organized.

## Commit Format

```
<emoji> <type>(<scope>): <subject>

[optional body]

[optional footer]
```

### Examples

```
✨ feat: add user authentication
🐛 fix(api): resolve token validation issue
📝 docs: update API documentation
♻️ refactor(auth): improve error handling
```

## Emoji Reference

### Features & Enhancements

| Emoji | Type     | Description     | Example                                     |
| ----- | -------- | --------------- | ------------------------------------------- |
| ✨    | feat     | New feature     | `✨ feat: add password reset functionality` |
| 🎉    | init     | Initial commit  | `🎉 init: project setup`                    |
| 🚀    | deploy   | Deploy/Release  | `🚀 deploy: release v1.2.0`                 |
| 💥    | breaking | Breaking change | `💥 breaking: change API response format`   |

### Bug Fixes

| Emoji | Type   | Description     | Example                               |
| ----- | ------ | --------------- | ------------------------------------- |
| 🐛    | fix    | Bug fix         | `🐛 fix: resolve memory leak`         |
| 🚑    | hotfix | Critical hotfix | `🚑 hotfix: fix production crash`     |
| 🩹    | patch  | Simple fix      | `🩹 patch: fix typo in error message` |

### Code Quality

| Emoji | Type     | Description             | Example                              |
| ----- | -------- | ----------------------- | ------------------------------------ |
| ♻️    | refactor | Code refactoring        | `♻️ refactor: simplify auth logic`   |
| 🎨    | style    | Code style/format       | `🎨 style: format with prettier`     |
| ⚡    | perf     | Performance improvement | `⚡ perf: optimize database queries` |
| 🏗️    | arch     | Architecture changes    | `🏗️ arch: migrate to microservices`  |

### Documentation

| Emoji | Type    | Description    | Example                          |
| ----- | ------- | -------------- | -------------------------------- |
| 📝    | docs    | Documentation  | `📝 docs: update README`         |
| 📄    | license | License update | `📄 license: add MIT license`    |
| 💡    | comment | Code comments  | `💡 comment: add JSDoc comments` |

### Testing

| Emoji | Type | Description      | Example                            |
| ----- | ---- | ---------------- | ---------------------------------- |
| ✅    | test | Add/update tests | `✅ test: add unit tests for auth` |
| 🧪    | exp  | Experiments      | `🧪 exp: try new caching strategy` |
| 🤡    | mock | Mocks            | `🤡 mock: add API mocks`           |

### Dependencies & Build

| Emoji | Type       | Description            | Example                                 |
| ----- | ---------- | ---------------------- | --------------------------------------- |
| 📦    | build      | Build system           | `📦 build: update webpack config`       |
| ⬆️    | upgrade    | Upgrade dependencies   | `⬆️ upgrade: update React to v18`       |
| ⬇️    | downgrade  | Downgrade dependencies | `⬇️ downgrade: revert TypeScript to v4` |
| ➕    | add-dep    | Add dependency         | `➕ add-dep: add axios`                 |
| ➖    | remove-dep | Remove dependency      | `➖ remove-dep: remove unused lodash`   |
| 📌    | pin        | Pin dependencies       | `📌 pin: lock package versions`         |

### CI/CD & DevOps

| Emoji | Type   | Description    | Example                          |
| ----- | ------ | -------------- | -------------------------------- |
| 💚    | ci     | CI/CD changes  | `💚 ci: fix GitHub Actions`      |
| 👷    | devops | Infrastructure | `👷 devops: add Docker support`  |
| 🔧    | config | Configuration  | `🔧 config: update eslint rules` |
| 🔨    | script | Scripts        | `🔨 script: add build script`    |

### Cleanup & Removal

| Emoji | Type    | Description       | Example                             |
| ----- | ------- | ----------------- | ----------------------------------- |
| 🔥    | remove  | Remove code/files | `🔥 remove: delete deprecated API`  |
| 🗑️    | cleanup | Cleanup/deprecate | `🗑️ cleanup: remove old migrations` |

### Security

| Emoji | Type     | Description        | Example                              |
| ----- | -------- | ------------------ | ------------------------------------ |
| 🔒    | security | Security fix       | `🔒 security: fix XSS vulnerability` |
| 🔐    | secret   | Secrets management | `🔐 secret: update API keys`         |

### UI/UX

| Emoji | Type    | Description          | Example                            |
| ----- | ------- | -------------------- | ---------------------------------- |
| 💄    | ui      | UI/UX changes        | `💄 ui: improve button styles`     |
| 📱    | mobile  | Mobile specific      | `📱 mobile: fix responsive layout` |
| 🖥️    | desktop | Desktop specific     | `🖥️ desktop: add desktop menu`     |
| ♿    | a11y    | Accessibility        | `♿ a11y: add ARIA labels`         |
| 🌐    | i18n    | Internationalization | `🌐 i18n: add Spanish translation` |

### Database

| Emoji | Type   | Description          | Example                                 |
| ----- | ------ | -------------------- | --------------------------------------- |
| 🗃️    | db     | Database changes     | `🗃️ db: add user table migration`       |
| 🔍    | search | Search functionality | `🔍 search: implement full-text search` |

### Work in Progress

| Emoji | Type | Description          | Example                          |
| ----- | ---- | -------------------- | -------------------------------- |
| 🚧    | wip  | Work in progress     | `🚧 wip: partial implementation` |
| 💩    | bad  | Bad code (needs fix) | `💩 bad: temporary hack`         |

### Other

| Emoji | Type       | Description      | Example                                |
| ----- | ---------- | ---------------- | -------------------------------------- |
| 🔊    | log-add    | Add logging      | `🔊 log-add: add debug logs`           |
| 🔇    | log-remove | Remove logging   | `🔇 log-remove: clean up console logs` |
| 👥    | contrib    | Contributors     | `👥 contrib: add contributors`         |
| 🙈    | ignore     | Update gitignore | `🙈 ignore: add .env to gitignore`     |
| 📸    | snapshot   | Update snapshots | `📸 snapshot: update test snapshots`   |
| ⏪    | revert     | Revert changes   | `⏪ revert: undo last commit`          |
| 🔀    | merge      | Merge branches   | `🔀 merge: merge develop into main`    |
| 🏷️    | type       | Type definitions | `🏷️ type: add TypeScript types`        |
| 🌱    | seed       | Seed data        | `🌱 seed: add demo data`               |
| 🚩    | flag       | Feature flags    | `🚩 flag: add feature toggle`          |
| 🥚    | easter-egg | Easter egg       | `🥚 easter-egg: add konami code`       |
| 📊    | analytics  | Analytics        | `📊 analytics: add event tracking`     |
| 🤖    | bot        | Bot/Automation   | `🤖 bot: add GitHub bot config`        |

## Scope Guidelines

The scope should be:

- **Short and descriptive** (e.g., `api`, `auth`, `ui`, `db`)
- **Lower-case**
- **Optional** but recommended for clarity

Common scopes:

- `api` - API endpoints
- `auth` - Authentication/Authorization
- `db` - Database
- `ui` - User Interface
- `config` - Configuration
- `deps` - Dependencies
- `ci` - Continuous Integration
- `docs` - Documentation
- `test` - Testing

## Subject Guidelines

The subject should:

- Use **imperative mood** ("add" not "added" or "adds")
- Be **concise** (50 characters or less)
- Not capitalize the first letter
- Not end with a period

## Body Guidelines (Optional)

The body should:

- Explain **what** and **why** (not how)
- Wrap at 72 characters
- Be separated from subject by a blank line

## Footer Guidelines (Optional)

The footer should contain:

- **Breaking changes** (start with `BREAKING CHANGE:`)
- **Issue references** (e.g., `Fixes #123`, `Closes #456`)

## Examples of Good Commits

```
✨ feat(auth): add JWT refresh token support

Implement refresh token mechanism to maintain user sessions
without requiring frequent re-authentication.

Closes #123
```

```
🐛 fix(api): handle null values in user profile

Previously the API would crash when user bio was null.
Added proper null checking and default values.

Fixes #456
```

```
♻️ refactor(db): optimize user queries

- Use indexed columns for filtering
- Add query result caching
- Remove N+1 queries in user listing

Performance improved by 40%
```

```
💥 breaking(api): change response format

BREAKING CHANGE: API responses now use camelCase instead of snake_case.
Migration guide available in docs/migration-v2.md
```

## Commit Validation

All commits are automatically validated using commitlint. If your commit doesn't follow the convention, it will be rejected with a helpful error message showing the correct format.

## Quick Reference

Most common commits:

- `✨ feat:` - New feature
- `🐛 fix:` - Bug fix
- `📝 docs:` - Documentation
- `♻️ refactor:` - Code refactoring
- `✅ test:` - Adding tests
- `🎨 style:` - Code formatting
- `⚡ perf:` - Performance improvement
- `🔧 config:` - Configuration changes

## Tips

1. **Be consistent** - Use the same emoji for the same type of change
2. **Be specific** - Use scopes to clarify what part of the code changed
3. **Be clear** - Write descriptive subjects that explain the change
4. **Be helpful** - Add body text for complex changes
5. **Reference issues** - Link to related issues/PRs in the footer

## IDE Integration

### VS Code

Install the "Conventional Commits" extension for autocomplete support.

### Git Aliases

Add these to your `.gitconfig`:

```bash
[alias]
    feat = "!f() { git commit -m \"✨ feat: $1\"; }; f"
    fix = "!f() { git commit -m \"🐛 fix: $1\"; }; f"
    docs = "!f() { git commit -m \"📝 docs: $1\"; }; f"
    refactor = "!f() { git commit -m \"♻️ refactor: $1\"; }; f"
```

Usage: `git feat "add new feature"`
