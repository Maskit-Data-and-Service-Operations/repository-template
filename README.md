# Maskit Repository Template

A standardized development environment template based on Maskit Development Team's best practices.

## 🚀 Quick Start

```bash
# Clone the template
git clone https://github.com/your-org/repository-template.git my-project
cd my-project

# Install dependencies (requires pnpm v10+)
pnpm install

# Initialize git hooks
pnpm prepare

# Start development
pnpm dev
```

## 📋 Prerequisites

- **Node.js**: v22.0.0 or higher (v24 also supported)
- **pnpm**: v10.0.0 or higher
- **Text Editor**: VSCode (recommended)

## 🛠️ Tech Stack

### Core Tools

- **Package Manager**: pnpm v10
- **Build System**: Nx v20
- **Language**: TypeScript v5
- **Linting**: ESLint v9 (Flat Config)
- **Formatting**: Prettier v3
- **Git Hooks**: Husky v9
- **Commit Linting**: Commitlint v19 (with emoji support)
- **Pre-commit**: lint-staged v16

### AI Development Tools

- **Claude Code**: AI-powered development assistant
- **Task Master AI**: Task management and workflow automation
- **GitHub Copilot**: Code review automation

## 📁 Project Structure

```
project/
├── apps/               # Application packages
│   └── api/           # API application
├── libs/              # Shared libraries
├── .claude/           # Claude Code configuration
├── .taskmaster/       # Task Master configuration
├── .github/           # GitHub Actions workflows
├── .husky/            # Git hooks
└── config files...    # Various configuration files
```

## 🎯 Features

### Development Workflow

- ✨ **ESLint v9 Flat Config**: Modern, performant linting
- 🎨 **Prettier v3**: Consistent code formatting
- 🔧 **TypeScript v5**: Type-safe development
- 🚀 **Nx Workspace**: Monorepo management and build optimization
- 🤖 **Claude Code Integration**: AI-assisted development
- 📋 **Task Master AI**: Automated task management

### Git Workflow

- 🎉 **Emoji-based Commits**: Visual commit classification
- 🔒 **Commitlint**: Enforced commit conventions
- ✅ **Pre-commit Hooks**: Automated code quality checks
- 🤖 **Automated PR Reviews**: Claude-powered code reviews

### CI/CD

- 🚀 **GitHub Actions**: Automated workflows
- 🤖 **Claude Code Review**: AI-powered PR reviews
- ✅ **Automated Testing**: Test on every push

## 📝 Commit Convention

This project uses emoji-based commit conventions. Examples:

```bash
✨ feat: add user authentication
🐛 fix(api): resolve token validation issue
📝 docs: update API documentation
♻️ refactor(auth): improve error handling
```

See [COMMIT_CONVENTION.md](./COMMIT_CONVENTION.md) for full guide.

## 🤖 AI Tools Setup

### Claude Code

1. Install Claude Code CLI
2. Configure MCP servers (already set up in `.mcp.json`)
3. Use `claude` command to start AI-assisted development

### Task Master AI

```bash
# Initialize Task Master
task-master init

# Parse PRD document
task-master parse-prd .taskmaster/docs/prd.txt

# Get next task
task-master next

# Complete task
task-master set-status --id=<id> --status=done
```

### GitHub Copilot Integration

Configure your GitHub token for Copilot MCP:

```bash
claude mcp add --transport http --scope user github https://api.githubcopilot.com/mcp/ -H "Authorization: Bearer <your_github_token>"
```

## 📦 Available Scripts

```bash
pnpm build        # Build the project
pnpm test         # Run tests
pnpm lint         # Lint and fix code
pnpm typecheck    # Type check TypeScript
pnpm format       # Format code with Prettier
pnpm prettier:check # Check formatting
```

## 🔧 Configuration Files

- `eslint.config.js` - ESLint v9 flat configuration
- `tsconfig.base.json` - Base TypeScript configuration
- `.prettierrc` - Prettier formatting rules
- `commitlint.config.ts` - Commit message rules
- `.lintstagedrc.json` - Pre-commit hooks configuration
- `.mcp.json` - MCP server configuration
- `.taskmaster/config.json` - Task Master configuration

## 🚀 GitHub Actions

### Claude Code Review

Automated PR reviews using Claude AI. Configure in `.github/workflows/claude-code-review.yml`:

- Triggers on PR open
- Customizable review instructions
- Support for different languages
- Can be filtered by file types or authors

## 📚 Documentation

- [Commit Convention Guide](./COMMIT_CONVENTION.md)
- [Claude Instructions](./CLAUDE.md)
- [Task Master Guide](./.taskmaster/CLAUDE.md)

## 🤝 Contributing

1. Follow the commit conventions
2. Ensure all tests pass
3. Run linting and formatting before committing
4. Create PRs for review

## 📄 License

MIT

## 🙏 Credits

Based on Maskit Development Team's standards and best practices.
