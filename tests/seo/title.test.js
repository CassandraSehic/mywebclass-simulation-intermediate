const { test, expect } = require('@playwright/test');

test.describe('Title Test', () => {
  test('should have a title', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const title = await page.title();
    expect(title).not.toBe('');
  });
});
