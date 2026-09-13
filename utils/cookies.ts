import { Page } from "@playwright/test";

export async function closeCookies(page: Page) {
  const consentSdk = page.locator('#onetrust-consent-sdk');
  const acceptButton = page.locator('#onetrust-accept-btn-handler, button:has-text("Accept All"), button:has-text("Accept all")');
  const closeButton = page.locator('#onetrust-close-btn-container, button[aria-label*="Close"], button:has-text("Close")');

  if (await consentSdk.isVisible().catch(() => false)) {
    if (await acceptButton.isVisible().catch(() => false)) {
      await acceptButton.click({ force: true, timeout: 15000 });
    } else if (await closeButton.isVisible().catch(() => false)) {
      await closeButton.click({ force: true, timeout: 15000 });
    }

    await page.waitForTimeout(500);
  }
}