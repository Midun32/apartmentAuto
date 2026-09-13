import { test, expect } from '@playwright/test';
import { ScheduleTourPage } from '../../pages/ScheduleTourPage';
import { closeCookies } from '../../utils/cookies.ts';

test.describe('Homepage', () => {

  test('HOME-003 — Navigate to book a Tour', async ({ page }) => {

    const scheduleTourPage = new ScheduleTourPage(page);

    await scheduleTourPage.clickScheduleTour();
    await expect(page.locator('#calendar')).toBeVisible();
  });

});