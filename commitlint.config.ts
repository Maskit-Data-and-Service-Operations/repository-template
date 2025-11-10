import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(.*?)\s(\w+)(?:\((.+)\))?:\s(.+)$/,
      headerCorrespondence: ['emoji', 'type', 'scope', 'subject'],
    },
  },
  rules: {
    'type-empty': [0],
    'subject-empty': [2, 'never'],
    'type-enum': [0],
    'header-max-length': [2, 'always', 100],
    'header-min-length': [2, 'always', 10],
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
    'scope-case': [2, 'always', 'lower-case'],
  },
  plugins: [
    {
      rules: {
        'emoji-enum': (parsed) => {
          const { header } = parsed;
          const validCommitTypes = {
            // Features & Enhancements
            '✨': 'feat', // New feature
            '🎉': 'init', // Initial commit
            '🚀': 'deploy', // Deploy/Release
            '💥': 'breaking', // Breaking change

            // Bug Fixes
            '🐛': 'fix', // Bug fix
            '🚑': 'hotfix', // Critical hotfix
            '🩹': 'patch', // Simple fix

            // Code Quality
            '♻️': 'refactor', // Refactor code
            '🎨': 'style', // Code style/format
            '⚡': 'perf', // Performance
            '🏗️': 'arch', // Architecture changes

            // Documentation
            '📝': 'docs', // Documentation
            '📄': 'license', // License
            '💡': 'comment', // Comments

            // Testing
            '✅': 'test', // Add tests
            '🧪': 'exp', // Experiments
            '🤡': 'mock', // Mocks

            // Dependencies & Build
            '📦': 'build', // Build system
            '⬆️': 'upgrade', // Upgrade dependencies
            '⬇️': 'downgrade', // Downgrade dependencies
            '➕': 'add-dep', // Add dependency
            '➖': 'remove-dep', // Remove dependency
            '📌': 'pin', // Pin dependencies

            // CI/CD & DevOps
            '💚': 'ci', // CI/CD
            '👷': 'devops', // DevOps/Infrastructure
            '🔧': 'config', // Configuration
            '🔨': 'script', // Scripts

            // Cleanup & Removal
            '🔥': 'remove', // Remove code/files
            '🗑️': 'cleanup', // Cleanup/deprecate

            // Security & Safety
            '🔒': 'security', // Security fix
            '🔐': 'secret', // Secrets/Keys

            // UI/UX
            '💄': 'ui', // UI/UX
            '📱': 'mobile', // Mobile
            '🖥️': 'desktop', // Desktop
            '♿': 'a11y', // Accessibility
            '🌐': 'i18n', // Internationalization

            // Database
            '🗃️': 'db', // Database
            '🔍': 'search', // Search

            // Work in Progress
            '🚧': 'wip', // Work in progress
            '💩': 'bad', // Bad code (needs improvement)

            // Other
            '🔊': 'log-add', // Add logs
            '🔇': 'log-remove', // Remove logs
            '👥': 'contrib', // Contributors
            '🙈': 'ignore', // Add gitignore
            '📸': 'snapshot', // Snapshots
            '⏪': 'revert', // Revert changes
            '🔀': 'merge', // Merge branches
            '🏷️': 'type', // Type definitions
            '🌱': 'seed', // Seed data
            '🚩': 'flag', // Feature flags
            '🥚': 'easter-egg', // Easter egg
            '📊': 'analytics', // Analytics
            '🤖': 'bot', // Bot/Automation
          };

          const emojiPattern = new RegExp(
            `^(${Object.keys(validCommitTypes)
              .map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
              .join('|')})`
          );
          const match = header.match(emojiPattern);

          if (!match) {
            const emojiList = Object.entries(validCommitTypes)
              .map(([emoji, type]) => `  ${emoji} ${type}: ${getDescription(type)}`)
              .join('\n');

            return [false, `commit must start with a valid emoji. Valid emojis:\n\n${emojiList}`];
          }
          return [true, ''];
        },
      },
    },
  ],
};

function getDescription(type: string): string {
  const descriptions: Record<string, string> = {
    feat: 'New feature',
    init: 'Initial commit',
    deploy: 'Deploy/Release',
    breaking: 'Breaking change',
    fix: 'Bug fix',
    hotfix: 'Critical hotfix',
    patch: 'Simple fix',
    refactor: 'Refactor code',
    style: 'Code style/format',
    perf: 'Performance improvement',
    arch: 'Architecture changes',
    docs: 'Documentation',
    license: 'License update',
    comment: 'Add/update comments',
    test: 'Add/update tests',
    exp: 'Experiments',
    mock: 'Add/update mocks',
    build: 'Build system',
    upgrade: 'Upgrade dependencies',
    downgrade: 'Downgrade dependencies',
    'add-dep': 'Add dependency',
    'remove-dep': 'Remove dependency',
    pin: 'Pin dependencies',
    ci: 'CI/CD changes',
    devops: 'DevOps/Infrastructure',
    config: 'Configuration changes',
    script: 'Scripts changes',
    remove: 'Remove code/files',
    cleanup: 'Cleanup/deprecate',
    security: 'Security fix',
    secret: 'Secrets/Keys management',
    ui: 'UI/UX changes',
    mobile: 'Mobile specific',
    desktop: 'Desktop specific',
    a11y: 'Accessibility',
    i18n: 'Internationalization',
    db: 'Database changes',
    search: 'Search functionality',
    wip: 'Work in progress',
    bad: 'Bad code (needs improvement)',
    'log-add': 'Add logging',
    'log-remove': 'Remove logging',
    contrib: 'Contributors update',
    ignore: 'Update gitignore',
    snapshot: 'Update snapshots',
    revert: 'Revert changes',
    merge: 'Merge branches',
    type: 'Type definitions',
    seed: 'Seed data',
    flag: 'Feature flags',
    'easter-egg': 'Easter egg',
    analytics: 'Analytics tracking',
    bot: 'Bot/Automation',
  };
  return descriptions[type] || type;
}

export default Configuration;
