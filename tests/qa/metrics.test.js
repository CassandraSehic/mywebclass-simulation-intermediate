/* const { test, expect } = require('@playwright/test');

test.describe('Website Metrics Test Suite', () => {
  test('Should pass all website metrics tests', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Page Load Time Test
    const loadTime = await page.evaluate(() => performance.timing.loadEventEnd - performance.timing.navigationStart);
    expect(loadTime).toBeLessThanOrEqual(5000); // Adjust the time limit as per your requirement

    // Accessibility Score Test
    const accessibilityScore = await page.accessibility.snapshot();
    expect(accessibilityScore.passes.length).toBeGreaterThanOrEqual(10); // Adjust the number of passes as per your requirement

    // Best Practices Score Test
    const bestPracticesScore = await page.evaluate(() => {
      const audits = window.__coverage__._puppeteerCoverage.audits;
      const bestPracticesAudit = audits.find((audit) => audit.group === 'best-practices');
      return bestPracticesAudit.score;
    });
    expect(bestPracticesScore).toBeGreaterThanOrEqual(0.9); // Adjust the score as per your requirement

    // First Contentful Paint (FCP) Test
    const fcp = await page.evaluate(() => {
      const paintTimings = performance.getEntriesByType('paint');
      const fcp = paintTimings.find((timing) => timing.name === 'first-contentful-paint');
      return fcp.startTime;
    });
    expect(fcp).toBeLessThanOrEqual(2000); // Adjust the time limit as per your requirement

    // Time to Interactive (TTI) Test
    const tti = await page.evaluate(() => {
      const fcp = performance.getEntriesByName('first-contentful-paint')[0];
      const domInteractive = performance.timing.domInteractive;
      const tti = domInteractive - fcp.startTime;
      return tti;
    });
    expect(tti).toBeLessThanOrEqual(5000); // Adjust the time limit as per your requirement

    // Total Blocking Time (TBT) Test
    const tbt = await page.evaluate(() => {
      const metrics = window.__coverage__._puppeteerCoverage.metrics;
      const tbt = metrics.totalBlockingTime;
      return tbt;
    });
    expect(tbt).toBeLessThanOrEqual(100); // Adjust the time limit as per your requirement

    // Cumulative Layout Shift (CLS) Test
    const cls = await page.metrics();
    expect(cls.cumulativeLayoutShift).toBeLessThanOrEqual(0.1); // Adjust the score as per your requirement

    // Page Size Test
    const pageSize = await
    page.evaluate(() => {
    const html = document.querySelector('html');
    const pageSize = (new TextEncoder().encode(html.outerHTML)).length / 1000;
    return pageSize;
    });
    expect(pageSize).toBeLessThanOrEqual(1000); // Adjust the size limit as per your requirement

    // Number of Requests Test
    const requests = await page.evaluate(() => {
      const performanceEntries = performance.getEntriesByType('resource');
      return performanceEntries.length;
    });
    expect(requests).toBeLessThanOrEqual(50); // Adjust the number of requests as per your requirement

    // Bundle Size Test
    //const bundleSize = await page.evaluate(() => {
     //const response = await page.goto('http://localhost:3000/src/js/main.js');
     //const bundleSize = response.headers()['content-length'];
     //expect(bundleSize).toBeGreaterThan(0);
});
});
*/
