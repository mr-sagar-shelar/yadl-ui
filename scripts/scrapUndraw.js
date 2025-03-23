import { chromium } from "playwright";
(async () => {
  const browser = await chromium.launch({
    headless: false,
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://undraw.co/illustrations");

  const allIllustrations = await page
    .locator(".appcontainer")
    .nth(2)
    .locator(".bg-gray-50");
  const illustrationCount = await allIllustrations.count();
  console.log(`illustrations = ${illustrationCount}`);

  // const texts = await allIllustrations.allTextContents();
  // console.log(`texts = ${texts}`);

  for (let i = 0; i < illustrationCount; i++) {
    const currentIcon = await allIllustrations.nth(i);
    const iconName = await currentIcon.allTextContents();
    console.log(`${iconName}`);

    // const temp = await allIllustrations.nth(i).locator(".injected-svg").count();
    // console.log(`${temp}`);
    // const svgContent = await currentIcon.querySelector(".injected-svg");
    // console.log(`${svgContent}`);
  }

  // const firstIcon = await allIllustrations.nth(2).locator("svg").count();
  // console.log(`firstIcon = ${firstIcon}`);

  // await page.waitForTimeout(1000);
  // await page.getByText("Next").click();
  await page.waitForTimeout(1000);
  await browser.close();
})();
