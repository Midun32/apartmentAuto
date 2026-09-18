import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { PropertyMapPage } from '../../pages/PropertyMapPage';
import { FloorPlansPage } from '../../pages/FloorPlansPage';

test.describe('Property Map', () => {
  let propertyMapPage: PropertyMapPage;
  let homePage: HomePage;
  let floorPlanPage: FloorPlansPage;

  test.beforeEach(async ({ page }) => {
    propertyMapPage = new PropertyMapPage(page);
    homePage = new HomePage(page);
    floorPlanPage = new FloorPlansPage(page);
  });

  test('MAP-001 — Verify Map Is Interactive', async ({ page }) => {
    await floorPlanPage.navigateToBrowseByBuilding();
    await expect(page.locator('body')).toContainText('Interactive Property Map');
    await propertyMapPage.verifyMap();
    await homePage.closeCookies();
    await homePage.closeComplementary();
    await propertyMapPage.clickBuildingA();
    await propertyMapPage.clickFloor2();
    await propertyMapPage.selectAvailableUnit();
    await propertyMapPage.verifyApplyBtn();
  });

});