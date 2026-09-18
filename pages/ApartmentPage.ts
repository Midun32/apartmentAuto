import { expect, Page } from "@playwright/test";

export class ApartmentPage {
  constructor(private page: Page) {}

  async clickApt() {
    await this.page.getByRole('link', {name: /Floor plan image, opens a dialog/i}).first().click();
  }

  async verifyAptModal() {
    const apartmentDialog = this.page.getByRole('dialog');
    await expect(apartmentDialog).toBeVisible();
    await expect(apartmentDialog.getByRole('region', { name: 'Floorplan Image carousel' })).toBeVisible();
  }
}