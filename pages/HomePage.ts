import { Page } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('/');
  }

  async clickMenu() {
    await this.page.click('#nav-btn');
  }

  async closeCookies() {
    await this.page.locator('#onetrust-close-btn-container').click();
  }

  async closeComplementary() {
     await this.page.getByRole('complementary').locator('[aria-label="close dialog"]').click();
  }
}