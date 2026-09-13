import { Page } from '@playwright/test';

export async function scrollVertically(page: Page, y: number) {
  await page.evaluate((scrollY) => {
    window.scrollTo({
      top: scrollY,
      left: 0,
      behavior: 'auto',
    });
  }, y);
}

export async function scrollHorizontally(page: Page, x: number) {
  await page.evaluate((scrollX) => {
    window.scrollTo({
      top: 0,
      left: scrollX,
      behavior: 'auto',
    });
  }, x);
} 