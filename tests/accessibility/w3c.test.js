const { test, expect } = require('@playwright/test');
const { getViolations } = require('axe-core');

test('W3C validation', async ({ page }) => {
  // Navigate to the web page you want to test
  await page.goto('http://localhost:3000');

  // Check whether the page is valid HTML using the W3C validator
  const response = await page.goto('https://validator.w3.org/nu/', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
    body: await page.content(),
  });
  const validationResult = await response.json();
  const errorCount = validationResult.messages.filter(message => message.type === 'error').length;
  await expect(errorCount).toBe(0);

  // Check whether the page meets accessibility standards using Axe
  const violations = await getViolations(await page.evaluate(() => axe.run()));
  await expect(violations.length).toBe(0);
});
