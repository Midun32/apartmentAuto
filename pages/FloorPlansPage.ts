import { expect, Page } from "@playwright/test";
import { HomePage } from "./HomePage";

export class FloorPlansPage {
  constructor(private page: Page) {}

  async navigateToFloorPlansPage() {
    const homePage = new HomePage(this.page);
    await homePage.clickMenu();
    await this.page.click('#navbar-dropdown-menu-mobile-1');
  }

  async navigateToFloorPlanPage() {
    await this.page.goto('/floorplans');
  }

  async navigateToBrowseByBuilding() {
    await this.page.goto('/interactivepropertymap', { waitUntil: 'domcontentloaded' });
  }
  
  async navigateToDenFloorPlans() {
    await this.page.goto('/den-floor-plans', { waitUntil: 'domcontentloaded' });
  }

  async navigateToFeaturedFloorPlans() {
    await this.page.goto('/featuredfloorplans');
  }

  async verifyFloorPlanVisibility() {
    await expect(this.page.locator('#floorplans-container')).toBeVisible();
  }

  async verify360Btn() {
    await this.page.getByRole('link', { name: /360° Tour/i }).first().isVisible();
  }

  async verifyVirtualTourBtn() {
    await this.page.getByRole('link', { name: /Virtual Tour/i }).first().isVisible();
  }

  async verifyApplyNowBtn() {
    await this.page.getByRole('link', { name: /Apply Now/i }).first().isVisible();
  }

  async verifyGuidedTourBtn() {
    await this.page.getByRole('link', { name: /Guided Tour/i }).first().isVisible();
  }

  async clickVirtualTourBtn() {
    const virtualTourButton = this.page.getByRole('link', { name: /Virtual Tour/i }).first();

    await virtualTourButton.scrollIntoViewIfNeeded();
    await virtualTourButton.click({ force: true });
  }

  async verifyVirtualTourModal() {
    await this.page.locator('#floorplans-video-modal').isVisible();
  }

  async viewModalTour() {
    await this.page.locator('iframe[title="Virtual Tour"]').contentFrame().getByRole('button', { name: 'Start 360° Tour' }).click();
  }

  async navigateToLivingRoom() {
    const sceneSelector = this.page.locator('iframe[title="Virtual Tour"]').contentFrame().getByRole('button', {name: /Expand scene list/i});
    await sceneSelector.dispatchEvent('click');
    const livingRoom = this.page.locator('iframe[title="Virtual Tour"]').contentFrame().getByRole('option', { name: 'Living Room' });
    await expect(livingRoom).toBeVisible();
    await livingRoom.dispatchEvent('click');
    await expect(sceneSelector).toHaveAttribute('aria-label', /Living Room/);
  }

  async navigateToBedroom() {
    const sceneSelector = this.page.locator('iframe[title="Virtual Tour"]').contentFrame().getByRole('button', {name: /Expand scene list/i});
    await sceneSelector.dispatchEvent('click');
    const bedroom = this.page.locator('iframe[title="Virtual Tour"]').contentFrame().getByRole('option', { name: 'Bedroom' });
    await expect(bedroom).toBeVisible();
    await bedroom.dispatchEvent('click');
    await expect(sceneSelector).toHaveAttribute('aria-label', /Bedroom/);
  }

  async closeModal() {
    const modal = this.page.locator('#floorplans-video-modal');
    await modal.getByRole('button', { name: 'close dialog' }).click();
    await expect(modal).toBeHidden();
  }

  async jumpToFloorPlans() {
    await this.page.getByRole('button', { name: 'Jump to Floorplans' }).click();
  }
}