const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch({
    headless: false,
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://undraw.co/illustrations");

  // const appContainers = await page.locator(".appcontainer");
  // const iconsCount = await appContainers.nth(2).locator(".bg-gray-50").count();

  const allIllustrations = await page
    .locator(".appcontainer")
    .nth(2)
    .locator(".bg-gray-50");
  const illustrationCount = await allIllustrations.count();
  console.log(`illustrations = ${illustrationCount}`);
  // await page.waitForTimeout(1000);
  // await page.getByText("Next").click();
  await page.waitForTimeout(1000);
  await browser.close();
})();
