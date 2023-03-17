const { chromium } = require('playwright');
const { test, expect } = require('@playwright/test');

test.describe('Page Load Speed Test', () => {
  test('should load the page in less than 3 seconds', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const loadTime = await page.evaluate(() => window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart);
    expect(loadTime).toBeLessThan(3000);
  });
});
