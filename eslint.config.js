const { createRequire } = require('module');
const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
  extends: ['next/core-web-vitals', 'next/typescript'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};

module.exports = nextConfig;
