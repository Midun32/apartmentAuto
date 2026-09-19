import { Page, expect } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded' });
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

  async checkAccessibility() {
    await this.page.getByRole('button', { name: 'Open Accessibility Options' }).click();
    await expect(this.page.locator('#acsModalTitle')).toBeVisible();

    const monochromeButton = this.page.getByRole('button', {name: 'Monochrome'});
    await monochromeButton.click();
    await expect(monochromeButton).toHaveAttribute('aria-pressed','true');
  }
}