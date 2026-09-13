import { Page } from "@playwright/test";
import { HomePage } from "./HomePage";

export class FloorPlansPage {
  constructor(private page: Page) {}
//   const homePage = new HomePage(this.page);

  async navigateToFloorPlansPage() {
    const homePage = new HomePage(this.page);
    await homePage.clickMenu();
    await this.page.click('#navbar-dropdown-menu-mobile-1');
  }

  async navigateToFloorPlanPage() {
    // await this.navigateToFloorPlansPage();
    await this.page.goto('/floorplans');
  }

  async navigateToBrowseByBuilding() {
    // await this.navigateToFloorPlansPage();
    await this.page.goto('/interactivepropertymap');
  }
  
  async navigateToDenFloorPlans() {
    await this.page.goto('/den-floor-plans');
  }

  async navigateToFeaturedFloorPlans() {
    await this.page.goto('/featuredfloorplans');
  }

  
}