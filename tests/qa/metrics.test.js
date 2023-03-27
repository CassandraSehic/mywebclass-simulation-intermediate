const { test, expect } = require('@playwright/test');

test.describe('Website Metrics Test Suite', () => {
  test('Should pass all website metrics tests', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Page Load Time Test
    const loadTime = await page.evaluate(() => performance.timing.loadEventEnd - performance.timing.navigationStart);
    expect(loadTime).toBeLessThanOrEqual(3000); // Adjust the time limit as per your requirement

    // Page Size Test
    const pageSize = await
    page.evaluate(() => {
      const html = document.querySelector('html');
      const pageSize = (new TextEncoder().encode(html.outerHTML)).length / 1000;
      return pageSize;
    });
    expect(pageSize).toBeLessThanOrEqual(1200); // Adjust the size limit as per your requirement

    // Number of Requests Test
    const requests = await page.evaluate(() => {
      const performanceEntries = performance.getEntriesByType('resource');
      return performanceEntries.length;
    });
    expect(requests).toBeLessThanOrEqual(50); // Adjust the number of requests as per your requirement
  });
});
