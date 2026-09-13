import { test, expect } from '@playwright/test';
import { FloorPlansPage } from '../../pages/FloorPlansPage';

test.describe('FloorPlanpage', () => {
  let floorPlanPage: FloorPlansPage;

  test.beforeEach(async ({ page }) => {
    floorPlanPage = new FloorPlansPage(page);
    

    const cookieButton = page.locator('#onetrust-accept-btn-handler, button:has-text("Accept All"), button:has-text("Accept all"), #onetrust-close-btn-container');
    if (await cookieButton.count()) {
      await cookieButton.first().click({ force: true });
      await page.waitForTimeout(500);
    }
  });

  test('HOME-002: Navigate to Floor Plans', async ({ page }) => {
    await floorPlanPage.navigateToFloorPlanPage();
    await expect(page.locator('body')).toContainText('View Featured Floor Plans');
  });

  test('FP-001 — Verify Bedroom Categories Are Displayed', async ({ page }) => {
    await floorPlanPage.navigateToFloorPlanPage();

    await expect(page.locator('body')).not.toContainText(/Cloudflare|Checking your browser/i);

    const appReady = page.locator('body');
    await expect(appReady).toContainText(/View Featured Floor Plans|Floor Plans/i, { timeout: 20000 });

    const dropdown = page.locator('#beds-dropdown-toggle');
    await expect(dropdown).toHaveCount(1, { timeout: 15000 });
    await dropdown.click();

    const dropdownMenu = page.locator('[aria-labelledby="beds-dropdown-toggle"]');
    await expect(dropdownMenu).toBeVisible({ timeout: 15000 });

    await expect(dropdownMenu).toContainText('1 Bedroom');
    await expect(dropdownMenu).toContainText('2 Bedrooms');
    await expect(dropdownMenu).toContainText('3 Bedrooms');
  });

});