const { test, expect } = require('@playwright/test');

test.describe('CodeQL Test', () => {
  test('Should not have any code vulnerabilities', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const vulnerabilities = await page.locator('css=div.vulnerability').count();
    expect(vulnerabilities).toBe(0);
  });
});