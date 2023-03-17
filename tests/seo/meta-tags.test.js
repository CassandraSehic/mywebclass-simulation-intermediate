const { test, expect } = require('@playwright/test');

test.describe('Meta Tag Test', () => {
  test('should have a description meta tag', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const descriptionMeta = await page.$('head meta[name="description"]');
    expect(descriptionMeta).not.toBeNull();
  });
});
