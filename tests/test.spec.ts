import { test, expect } from '@playwright/test';

test('should show the page and click button', async ({ page }) => {
  await page.goto('http://nginx');
  await expect(page.locator('h1')).toHaveText('Hello from Nginx!');
  await page.click('#my-button');
});
