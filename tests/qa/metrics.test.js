const { chromium } = require('playwright');
const expect = require('expect');

test('Website meets specified metrics', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');

  const metrics = await page.evaluate(() => {
    return {
      pageLoadTime: performance.timing.loadEventEnd - performance.timing.navigationStart,
      accessibilityScore: getAccessibilityScore(),
      bestPracticesScore: getBestPracticesScore(),
      firstContentfulPaint: performance.getEntriesByType('paint')[0].startTime,
      timeToInteractive: getTimeToInteractive(),
      totalBlockingTime: getTotalBlockingTime(),
      cumulativeLayoutShift: getCumulativeLayoutShift(),
      pageSize: document.documentElement.innerHTML.length,
      numberOfRequests: performance.getEntriesByType('resource').length,
      bundleSize: getBundleSize()
    };
  });

  expect(metrics.pageLoadTime).toBeLessThan(5000); // should load within 5 seconds
  expect(metrics.accessibilityScore).toBeGreaterThan(90); // should have an accessibility score of at least 90
  expect(metrics.bestPracticesScore).toBeGreaterThan(90); // should have a best practices score of at least 90
  expect(metrics.firstContentfulPaint).toBeLessThan(1000); // should have a FCP of less than 1 second
  expect(metrics.timeToInteractive).toBeLessThan(5000); // should have a TTI of less than 5 seconds
  expect(metrics.totalBlockingTime).toBeLessThan(100); // should have a TBT of less than 100 ms
  expect(metrics.cumulativeLayoutShift).toBeLessThan(0.1); // should have a CLS of less than 0.1
  expect(metrics.pageSize).toBeLessThan(500000); // should have a page size of less than 500 KB
  expect(metrics.numberOfRequests).toBeLessThan(50); // should have less than 50 requests
  expect(metrics.bundleSize).toBeLessThan(500000); // should have a bundle size of less than 500 KB

  await browser.close();
});
