import { test, expect } from '@playwright/test';
import { ApartmentPage } from '../../pages/ApartmentPage';
import { HomePage } from '../../pages/HomePage';
import { FloorPlansPage } from '../../pages/FloorPlansPage';

test.describe('ApartmentPage', () => {
    let apartmentPage: ApartmentPage;
    let homePage: HomePage;
    let floorPlanPage: FloorPlansPage;

  test.beforeEach(async ({ page }) => {
    apartmentPage = new ApartmentPage(page);
    homePage = new HomePage(page);
    floorPlanPage = new FloorPlansPage(page);
  });

  test('APT-001 — Verify Unit Location CTA', async ({ page }) => {
    await floorPlanPage.navigateToDenFloorPlans();
    await homePage.closeCookies();
    await homePage.closeComplementary();
    await expect(page.locator('body')).toContainText('Discover the Flexibility of Den Floor Plans at Preston Ridge');
    await floorPlanPage.jumpToFloorPlans();
    await apartmentPage.clickApt();
    await apartmentPage.verifyAptModal();
  });

});