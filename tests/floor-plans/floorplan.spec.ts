import { test, expect } from '@playwright/test';
import { FloorPlansPage } from '../../pages/FloorPlansPage';
import { HomePage } from '../../pages/HomePage';

test.describe('FloorPlanpage', () => {
  let floorPlanPage: FloorPlansPage;
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    floorPlanPage = new FloorPlansPage(page);
    homePage = new HomePage(page);
    

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

  test('FP-002 — Verify Floor Plan Cards Are Displayed', async ({ page }) => {
    await floorPlanPage.navigateToFloorPlanPage();
    await floorPlanPage.verifyFloorPlanVisibility();
  });

  test('FP-003 — Individual can perform virtual tour of Floor Plan', async ({ page }) => {
    await floorPlanPage.navigateToFloorPlanPage();
    await floorPlanPage.verifyFloorPlanVisibility();
    await floorPlanPage.verifyGuidedTourBtn();
    await floorPlanPage.verifyApplyNowBtn();
    await floorPlanPage.verify360Btn();
    await floorPlanPage.verifyVirtualTourBtn();
    await homePage.closeCookies();
    await homePage.closeComplementary();
    await floorPlanPage.clickVirtualTourBtn();
    await floorPlanPage.verifyVirtualTourModal();
    await floorPlanPage.viewModalTour();
    await floorPlanPage.navigateToLivingRoom();
    await floorPlanPage.navigateToBedroom();
    await floorPlanPage.closeModal();
    await floorPlanPage.verifyFloorPlanVisibility();
  });

});