import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:4173/web-projects/');

});

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:4173/web-projects/');
});
