import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { closeCookies } from '../../utils/cookies.ts';

test.describe('Homepage', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
  });

  test('HOME-001: Homepage loads successfully', async ({ page }) => {
    await homePage.navigate();
    await closeCookies(page);
    await expect(page).toHaveTitle(/Preston Ridge/i);
  });

  const viewports = [
    { name: 'desktop', width: 1440, height: 900 },
    { name: 'mobile', width: 390, height: 844 }
  ];

  for (const viewport of viewports) {
    test(`HOME-004 — homepage remains usable in ${viewport.name} view`, async ({ page }) => {
      await page.setViewportSize({
        width: viewport.width,
        height: viewport.height,
      })

      await homePage.navigate();
      await closeCookies(page);

      await expect(page.locator('body')).toContainText('Check Availability');
      await expect(page.locator('main')).toBeVisible();

      if (viewport.name === 'mobile') {
        await expect(page.locator('#nav-btn')).toBeVisible();
      await page.locator('#nav-btn').click();
        await expect(page.locator('nav a').first()).toBeVisible();
      } else {
        // desktop layout keeps the hamburger toggle hidden and the page content/CTA visible
        await expect(page.locator('body')).toContainText(/Check Availability|Floor Plans|Schedule Tour/i);
        await expect(page.locator('#nav-btn')).toBeHidden();
      }

      // Check for accidental horizontal scroll
      const hasHorizontalScroll = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth
      );

      expect(hasHorizontalScroll).toBeFalsy();
    });
  }

});