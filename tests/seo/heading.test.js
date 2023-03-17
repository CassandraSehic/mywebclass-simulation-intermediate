const { test, expect } = require('@playwright/test');

test.describe('Heading Test', () => {
  test('should have an H1 heading', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const heading = await page.$('h1');
    expect(heading).not.toBeNull();
  });
});
