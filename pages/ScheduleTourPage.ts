import { Page, expect } from "@playwright/test";

export class ScheduleTourPage {
  constructor(private page: Page) {}

  async clickScheduleTour() {
    await this.page.goto('/scheduletour', { waitUntil: 'domcontentloaded' });
  }

  async verifyOnScheduleTourPage() {
    await expect(this.page.locator('[data-selenium-id="SID_h1Tag"]')).toHaveText('Schedule A Tour');
  }

  async selectDate() {
    await this.page.locator('label[for="radiodate4"]').click();
  }

  async selectTime() {
    // await expect(this.page.getByText('Processing Request...', { exact: true })).toBeHidden();
    const firstTimeSlot = this.page.locator('label[for="available-slot-1"]');
    await expect(firstTimeSlot).toBeVisible({ timeout: 15000 });
    await expect(firstTimeSlot).toBeEnabled({ timeout: 15000 });
    await firstTimeSlot.click();
  }

  async confirmSelection() {
    await this.page.locator('[data-selenium-id="datetimeconfirmbtn"]').click();
  }

  async verifyContactForm() {
    await expect(this.page.locator('#scheduletour-myContactForm')).toBeVisible();
  }

  async clickSubmitButton() {
    await this.page.locator('[data-selenium-id="fakebutton"]').click();
  }

  async verifyErrorMsg() {
    await expect(this.page.locator('#scheduletour-invalidFirstname')).toBeVisible();
  }
}