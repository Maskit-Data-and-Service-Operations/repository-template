# Maskit Repository Template

A modern, scalable monorepo application template for maskit application repositories. This project is built using the NX monorepo architecture and provides both backend API and frontend web application services.

## Overview

This is a **private monorepo** managed by the Maskit Development Team. It serves as a repository template for building interconnected services with a unified development experience.

**Project Name:** `maskit-repository-template`  
**Version:** 1.0.0  
**Repository:** maskit-repository-template

## Project Structure

```
maskit-repository-template/
├── apps/                      # Application packages
│   ├── api/                   # Backend Express.js API server
│   │   ├── src/
│   │   │   └── main.ts       # Express server entry point
│   │   ├── tsconfig.json     # TypeScript config
│   │   └── project.json      # NX project configuration
│   └── web/                   # Frontend Next.js application
│       ├── src/
│       │   └── app/          # Next.js App Router
│       │       ├── page.tsx
│       │       ├── layout.tsx
│       │       ├── global.css
│       │       └── api/      # Route handlers
│       ├── next.config.js
│       ├── tailwind.config.js
│       └── postcss.config.js
├── packages/                  # Shared packages
│   └── components/           # Reusable React components library
│       ├── src/
│       │   ├── index.ts
│       │   └── lib/
│       │       └── components.tsx
│       └── package.json
├── nx.json                    # NX workspace configuration
├── tsconfig.base.json        # Base TypeScript configuration
├── tsconfig.json             # Root TypeScript configuration
├── pnpm-workspace.yaml       # pnpm workspace configuration
├── package.json              # Root package.json
├── eslint.config.mjs         # ESLint configuration
├── .prettierrc                # Prettier configuration
├── .prettierignore            # Prettier ignore rules
├── .lintstagedrc.json         # Lint-staged configuration
├── commitlint.config.ts       # Commit linting rules
├── COMMIT_CONVENTION.md       # Emoji-based commit conventions
├── CLAUDE.md                  # Claude Code instructions
└── .github/                   # GitHub configuration
    ├── workflows/            # CI/CD workflows
    └── instructions/         # Development instructions
```

## Technology Stack

### Core Framework

- **NX Monorepo:** v22.0.2 - Powerful monorepo management
- **Node.js:** >= 22.0.0 - JavaScript runtime
- **TypeScript:** ~5.9.2 - Type-safe JavaScript

### Package Manager

- **pnpm:** >= 10.0.0 (v10.15.0) - Fast, disk space efficient package manager
- Workspace management with pnpm workspaces
- Shared lockfile across all packages

### Backend Stack

- **Express.js:** ^4.21.2 - Lightweight web framework
- **Express Types:** ^4.17.21 - TypeScript definitions for Express

### Frontend Stack

- **Next.js:** ~15.2.4 - React meta-framework with App Router
- **React:** ^19.0.0 - UI library
- **React DOM:** ^19.0.0 - React rendering for web

### Styling & CSS

- **Tailwind CSS:** 3.4.3 - Utility-first CSS framework
- **PostCSS:** 8.4.38 - CSS transformations
- **Autoprefixer:** 10.4.13 - Vendor prefix automation

### Build Tools & Compilation

- **SWC:** ~1.5.7 - Fast JavaScript compiler
- **SWC Node Register:** ~1.9.1 - Node runtime compilation
- **SWC CLI:** ~0.6.0 - Command-line interface
- **Vite:** ^7.0.0 - Next-generation build tool
- **Webpack:** ^5.102.1 - Module bundler
- **Webpack CLI:** ^5.1.4 - CLI for webpack
- **ts-loader:** ^9.5.4 - TypeScript loader for webpack

### Code Quality & Testing

- **ESLint:** ^9.8.0 - JavaScript linter
- **TypeScript ESLint:** ^8.40.0 - ESLint support for TypeScript
- **Prettier:** ^2.6.2 - Code formatter
- **Jest:** ~30.2.0 - Testing framework (via Vitest support)
- **Vitest:** ^3.0.0 - Unit test runner
- **Vitest UI:** ^3.0.0 - Interactive test UI
- **JSDOM:** ~22.1.0 - DOM implementation for testing

### Linting & Pre-commit

- **Husky:** ^9.1.7 - Git hooks framework
- **Lint-staged:** ^16.1.5 - Run linters on staged files
- **Commitlint:** ^19.8.1 - Commit message validation

### NX Plugins & Extensions

- **@nx/eslint:** 22.0.2
- **@nx/eslint-plugin:** 22.0.2
- **@nx/express:** 22.0.2 - Express.js generators and executors
- **@nx/js:** 22.0.2 - JavaScript/TypeScript compilation
- **@nx/next:** 22.0.2 - Next.js integration
- **@nx/node:** 22.0.2 - Node.js backend support
- **@nx/react:** 22.0.2 - React integration
- **@nx/vite:** 22.0.2 - Vite integration
- **@nx/web:** 22.0.2 - Web development tools
- **@nx/webpack:** 22.0.2 - Webpack integration

### Utilities & Dependencies

- **Axios:** ^1.6.0 - HTTP client
- **TSLib:** ^2.3.0 - TypeScript helper library
- **JITI:** 2.4.2 - Runtime TypeScript loader

### React & JSX Tools

- **Babel Core:** ^7.14.5
- **Babel Preset React:** ^7.14.5
- **React Refresh:** ^0.10.0 - Fast refresh for React
- **SWC Node Register:** ~1.9.1 - Node runtime TypeScript/JSX
- **React Refresh Webpack Plugin:** ^0.5.7
- **SVGR Webpack:** ^8.0.1 - SVG to React component transformer

## Available Scripts

### Development & Building

```bash
# Build all projects
npm run build
# or with NX:
nx build

# Build specific project
nx build api
nx build web

# Serve API in development
nx serve api

# Serve web app with live reload
nx dev web

# Typecheck all TypeScript
npm run typecheck

# Format code with Prettier
npm run format

# Check code formatting
npm run prettier:check

# Lint with ESLint (with auto-fix)
npm run lint

# Run tests
npm run test
```

### NX Specific Commands

```bash
# View project graph
nx graph

# Show affected projects from changes
nx affected:graph

# Show project details
nx show project web --web
nx show project api --web
```

### Git Hooks & Pre-commit

```bash
# Prepare git hooks (runs automatically on install)
npm run prepare

# Husky will automatically run lint-staged on git commit
```

## Configuration Files

### Build & Compilation

| File                                    | Purpose                                              |
| --------------------------------------- | ---------------------------------------------------- |
| `tsconfig.base.json`                    | Base TypeScript configuration shared by all projects |
| `tsconfig.json`                         | Root TypeScript configuration                        |
| `apps/api/tsconfig.json`                | API TypeScript config (extends base)                 |
| `apps/api/tsconfig.app.json`            | API application-specific config                      |
| `apps/web/tsconfig.json`                | Web app TypeScript config with Next.js plugins       |
| `packages/components/tsconfig.lib.json` | Components library build config                      |

### Styling & CSS

| File                          | Purpose                                        |
| ----------------------------- | ---------------------------------------------- |
| `apps/web/tailwind.config.js` | Tailwind CSS configuration                     |
| `apps/web/postcss.config.js`  | PostCSS plugins and configuration              |
| `.editorconfig`               | Editor configuration for consistent formatting |

### Linting & Formatting

| File                 | Purpose                                   |
| -------------------- | ----------------------------------------- |
| `eslint.config.mjs`  | ESLint configuration (flat config format) |
| `.prettierrc`        | Prettier formatting rules                 |
| `.prettierignore`    | Files to exclude from Prettier formatting |
| `.lintstagedrc.json` | Lint-staged rules for pre-commit hooks    |

### Code Quality & Git

| File                   | Purpose                             |
| ---------------------- | ----------------------------------- |
| `commitlint.config.ts` | Commit message validation rules     |
| `COMMIT_CONVENTION.md` | Emoji-based commit convention guide |
| `.gitignore`           | Git ignore rules                    |

### Package Management

| File                  | Purpose                                      |
| --------------------- | -------------------------------------------- |
| `nx.json`             | NX workspace configuration and plugins       |
| `package.json`        | Root dependencies and workspace definition   |
| `pnpm-workspace.yaml` | pnpm workspace configuration                 |
| `.npmrc`              | npm/pnpm registry and behavior configuration |

### Project Specific

| File                               | Purpose                          |
| ---------------------------------- | -------------------------------- |
| `apps/api/project.json`            | API project NX configuration     |
| `apps/web/project.json`            | Web project NX configuration     |
| `packages/components/package.json` | Components package configuration |

## TypeScript Configuration Details

### Base Configuration (`tsconfig.base.json`)

```typescript
{
  "compilerOptions": {
    "composite": true,
    "declarationMap": true,
    "emitDeclarationOnly": true,
    "importHelpers": true,
    "isolatedModules": true,
    "lib": ["es2022"],
    "module": "esnext",
    "moduleResolution": "bundler",
    "strict": true,
    "target": "es2022",
    "skipLibCheck": true,
    "noUnusedLocals": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitOverride": true,
    "noEmitOnError": true
  }
}
```

### Key TypeScript Features Enabled

- Strict mode for type safety
- Composite project references for workspace optimization
- Declaration maps for source mapping
- Isolated modules for independent transpilation
- No unused locals checking

## Code Quality Standards

### Prettier Configuration

```json
{
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 100,
  "tabWidth": 2,
  "semi": true,
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

### ESLint Rules

The project uses:

- **@nx/eslint-plugin** for NX-specific rules
- **@typescript-eslint** for TypeScript linting
- **eslint-plugin-react** for React best practices
- **eslint-plugin-react-hooks** for React hooks rules
- **eslint-plugin-jsx-a11y** for accessibility
- **eslint-plugin-import** for import/export validation
- **eslint-config-prettier** for Prettier integration

**Key ESLint Rule:** `@nx/enforce-module-boundaries` enforces proper dependency management between workspace projects.

### Lint-staged Pre-commit Hooks

On commit, the following checks run automatically:

```json
{
  "*.{ts,tsx}": ["eslint --fix --max-warnings=0", "prettier --write"],
  "*.{js,jsx}": ["eslint --fix --max-warnings=0", "prettier --write"],
  "*.{json,md,yml,yaml}": ["prettier --write"]
}
```

## Commit Convention

This project follows **emoji-based commit conventions** for clear and organized commit history.

### Commit Format

```
<emoji> <type>(<scope>): <subject>

[optional body]

[optional footer]
```

### Common Emoji Types

**Features & Enhancements:**

- `✨ feat` - New feature
- `🎉 init` - Initial commit
- `🚀 deploy` - Deploy/Release
- `💥 breaking` - Breaking change

**Bug Fixes:**

- `🐛 fix` - Bug fix
- `🚑 hotfix` - Critical hotfix
- `🩹 patch` - Simple fix

**Code Quality:**

- `♻️ refactor` - Code refactoring
- `🎨 style` - Code style/format
- `⚡ perf` - Performance improvement
- `🏗️ arch` - Architecture changes

**Documentation & Maintenance:**

- `📝 docs` - Documentation
- `🧪 test` - Tests
- `🔧 chore` - Build/config changes
- `💬 comments` - Comments/documentation

See `COMMIT_CONVENTION.md` for the complete guide.

## NX Workspace Configuration

### Key NX Settings (`nx.json`)

**Named Inputs:** Defines which files affect task execution

- `default` - All project files + shared globals
- `production` - Excludes test/spec files and test setup
- `sharedGlobals` - CI workflow file

**Plugins Configured:**

1. **@nx/js/typescript** - TypeScript compilation
2. **@nx/next/plugin** - Next.js integration
3. **@nx/eslint/plugin** - ESLint linting
4. **@nx/webpack/plugin** - Webpack bundling
5. **@nx/vite/plugin** - Vite bundling

**Generators:** Default configurations for scaffolding

- Next.js apps use Tailwind CSS and ESLint
- React libraries don't use a unit test runner by default

## Project Details

### API Application (`apps/api`)

- **Type:** Express.js backend server
- **Port:** 3333 (default, configurable via `PORT` env var)
- **Entry Point:** `apps/api/src/main.ts`
- **Build Output:** `dist/apps/api`

**Key Features:**

- Static asset serving via `/assets` route
- RESTful API endpoint at `/api`
- Development and production build targets
- Workspace module management for deployment

### Web Application (`apps/web`)

- **Type:** Next.js 15.2.4 with App Router
- **Styling:** Tailwind CSS with PostCSS
- **Entry Point:** `apps/web/src/app`
- **Port:** 3000 (default Next.js dev port)

**Key Features:**

- Server-side rendering (SSR) with Next.js
- App Router for page routing
- Tailwind CSS for styling
- TypeScript with strict mode enabled
- Route handlers in `/api` directory

### Components Package (`packages/components`)

- **Type:** Shared React component library
- **Main Export:** `dist/index.js`
- **Types:** `dist/index.d.ts`
- **Format:** ES modules with TypeScript support

**Features:**

- Reusable component exports
- Built for distribution to NPM
- Proper type declarations
- Consumed by web application

## Environment Variables

Environment variables should be defined in `.env` or `.env.local` files (not committed to git).

Add these to `.gitignore` patterns:

```
.env
.env.local
.env.*.local
```

## Build & Deployment

### Build Output Structure

```
dist/
├── apps/
│   ├── api/         # Compiled API server
│   └── web/         # Next.js build output (.next)
└── packages/
    └── components/  # Built component library
```

### Production Targets

- **API:** `nx build api:production`
- **Web:** `nx build web:production`
- **Components:** `nx build components:production`

### Deployment Utilities

The API project includes NX deployment helpers:

- `prune-lockfile` - Optimize lock file for deployment
- `copy-workspace-modules` - Copy required node_modules
- `prune` - Comprehensive deployment preparation

## Node & Package Manager Requirements

- **Node.js:** >= 22.0.0
- **pnpm:** >= 10.0.0 (currently 10.15.0)

### pnpm Configuration (`.npmrc`)

```
auto-install-peers=true           # Auto-install peer dependencies
strict-peer-dependencies=false    # Don't fail on peer dep issues
shamefully-hoist=true             # Hoist packages to node_modules root
prefer-workspace-packages=true    # Prefer local workspace packages
link-workspace-packages=deep      # Deep linking of workspace packages
shared-workspace-lockfile=true    # Single lock file for workspace
recursive-install=true            # Recursive installation
enable-pre-post-scripts=true      # Run pre/post install scripts
```

## Installation & Setup

### Prerequisites

- Node.js >= 22.0.0
- pnpm >= 10.0.0

### Installation Steps

```bash
# Install dependencies with pnpm
pnpm install

# Husky git hooks will be prepared automatically via 'prepare' script
```

### First Time Setup

```bash
# Install NX CLI globally (optional)
npm install -g nx

# View the project graph
nx graph

# Check available projects and targets
nx show project web --web
nx show project api --web
```

## Development Workflow

### Development Mode

```bash
# Terminal 1: Start API server
nx serve api

# Terminal 2: Start Web app
nx dev web

# The API runs on http://localhost:3333
# The Web app runs on http://localhost:3000
```

### Code Quality Checks

Before committing:

```bash
# Type check
npm run typecheck

# Lint and auto-fix
npm run lint

# Format code
npm run format

# Or run all at once (manual pre-commit)
npm run typecheck && npm run lint && npm run format
```

## Utilities & Tools

### Editor Configuration

- **Editor:** Support for VS Code, Intellij, and other editors
- **Settings:** Configured via `.editorconfig`
- **VS Code Recommended:** Use workspace settings in `.vscode/`

### Post-Installation Hooks

- **Husky:** Auto-enabled for git hooks
- **Lint-staged:** Runs linters only on changed files

## CI/CD Configuration

The project includes GitHub Actions workflow:

- **Location:** `.github/workflows/claude-code-review.yml`
- **Purpose:** Code review automation

Additional instruction files in `.github/instructions/`:

- `dev_workflow.instructions.md`
- `self_improve.instructions.md`
- `vscode_rules.instructions.md`
- `taskmaster.instructions.md`

## File Statistics

- **API Source Files:** ~1 TypeScript file
- **Web Source Files:** ~5 files (pages, layouts, routes)
- **Components Package:** ~3 files
- **Total Size:** ~156KB (without node_modules)

## Dependencies Management

### Workspace Packages

- `apps/api` - Backend application
- `apps/web` - Frontend application
- `packages/components` - Shared components library

### Only-Built Dependencies

The following dependencies are built for the current platform and should always be installed from binaries:

- `@parcel/watcher`
- `@swc/core`
- `esbuild`
- `nx`
- `sharp`
- `unrs-resolver`
- `core-js-pure`

## Claude Code Integration

This project includes Claude-specific instructions:

- **File:** `CLAUDE.md`
- **Context Modules:** References to shared authentication services
- **Quality Checklist:**
  - TypeScript type checking
  - ESLint validation
  - Prettier formatting

## License & Maintainance

**Maintained by:** Maskit Development Team  
**Privacy:** Private repository  
**Description:** Maskit Development Team Repository Template

## Resources

- [NX Documentation](https://nx.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Express.js Guide](https://expressjs.com/)
