import { Page } from "@playwright/test";

export class ScheduleTourPage {
  constructor(private page: Page) {}

  async clickScheduleTour() {
    await this.page.goto('/scheduletour');
  }
}