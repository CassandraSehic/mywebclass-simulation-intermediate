const glob = require('glob');

describe('ESLint', () => {
  test('checks for linting errors in JavaScript files', async () => {
    const files = glob.sync('**/*.js', { ignore: ['node_modules/**/*.js'] });
    for (const file of files) {
      await page.goto(`file://${process.cwd()}/${file}`);
      const lintErrors = await page.evaluate(() => {
        return window.eslintErrors;
      });
      expect(lintErrors).toHaveLength(0);
    }
  });
});
