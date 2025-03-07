module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // New functionality
        'fix', // Bug fixes
        'docs', // Documentation updates
        'style', // Code style changes
        'refactor', // Code refactoring
        'test', // Testing
        'chore', // Miscellaneous tasks
        'build', // Changes related to build system
      ],
    ],
    'header-max-length': [2, 'always', 72],
    'subject-case': [0],
  },
};
