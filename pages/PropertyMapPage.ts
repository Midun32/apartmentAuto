import { Page, expect } from "@playwright/test";

export class PropertyMapPage {
  constructor(private page: Page) {}

  async verifyMap() {
    await expect(this.page.locator('#maps-view')).toBeVisible();
  }

  async clickBuildingA() {
    await this.page.getByRole('button', { name: /815 ELLERSTON/i }).click();
  }

  async clickFloor2() {
    await this.page.getByRole('button', { name: /Level 2/i }).click();
  }

  async selectAvailableUnit() {
    await this.page.locator('.pin avail_unit').first().click();
  }

  async verifyApplyBtn() {
    await expect(this.page.getByRole('link', { name: 'Apply Now' })).toBeVisible();
  }
}