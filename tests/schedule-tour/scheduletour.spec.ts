import { test, expect } from '@playwright/test';
import { ScheduleTourPage } from '../../pages/ScheduleTourPage';
import { HomePage } from '../../pages/HomePage';

test.describe('Homepage', () => {
  let scheduleTourPage: ScheduleTourPage;
  let homePage: HomePage;
  
  test.beforeEach(async ({ page }) => {
    scheduleTourPage = new ScheduleTourPage(page);
    homePage = new HomePage(page);
    

    const cookieButton = page.locator('#onetrust-accept-btn-handler, button:has-text("Accept All"), button:has-text("Accept all"), #onetrust-close-btn-container');
    if (await cookieButton.count()) {
      await cookieButton.first().click({ force: true });
      await page.waitForTimeout(500);
    }
  });

  

  test('HOME-003 — Navigate to book a Tour', async ({ page }) => {
    await scheduleTourPage.clickScheduleTour();
    await expect(page.locator('#calendar')).toBeVisible();
  });

  test('SCHED-001 — Validate Empty Required Fields', async ({ page }) => {
    await scheduleTourPage.clickScheduleTour();
    await homePage.closeCookies();
    await scheduleTourPage.verifyOnScheduleTourPage();
    await homePage.closeComplementary();
    await scheduleTourPage.selectDate();
    await scheduleTourPage.selectTime();
    await scheduleTourPage.confirmSelection();
    await scheduleTourPage.verifyContactForm();
    await scheduleTourPage.clickSubmitButton();
    await scheduleTourPage.verifyErrorMsg();
  });

});