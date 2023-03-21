const { test, expect } = require('@playwright/test');
const { getViolations } = require('axe-core');

test('Accessibility compliance', async ({ page }) => {
  // Navigate to the web page you want to test
  await page.goto('http://localhost:3000');

  // Check whether the page meets accessibility standards using Axe
  const violations = await getViolations(await page.evaluate(() => axe.run()));
  await expect(violations.length).toBe(0);
});
