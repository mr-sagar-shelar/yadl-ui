import { chromium } from "playwright";
import {
  writeComponentSkeleton,
  writeIndexFile,
  toPascalCase,
} from "./utils.js";
(async () => {
  const browser = await chromium.launch({
    headless: false,
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://undraw.co/illustrations");
  await page.waitForLoadState("domcontentloaded");
  let indexFileContents = "";

  for (let i = 0; i < 1; i++) {
    const allIllustrations = await page
      .locator(".appcontainer")
      .nth(2)
      .locator(".bg-gray-50");
    const illustrationCount = await allIllustrations.count();
    console.log(`********* illustrations = ${illustrationCount}`);

    // for (let i = 0; i < illustrationCount; i++) {
    for (let i = 0; i < 1; i++) {
      const currentIcon = await allIllustrations.nth(i);
      let iconName = await currentIcon.allTextContents();
      iconName = toPascalCase(iconName[0]);
      console.log(`${iconName}`);

      let svgData = await currentIcon
        .getByRole("img")
        .first()
        .evaluate((evaluate) =>
          evaluate.parentElement.innerHTML.replaceAll(
            "currentColor",
            "var(--color-primary)",
          ),
        );
      console.log(`${svgData}`);

      // writeComponentSkeleton(iconName, `./src/components/Undraw/${iconName}`);
      // indexFileContents = `${indexFileContents}\nexport * from "./${iconName}";`;
    }

    // writeIndexFile(indexFileContents, `./src/components/Undraw/index.ts`);

    await page.waitForTimeout(1000);
    // await page.getByText("Next ").click();
    await page.getByRole("link", { name: "Next" }).click();
    await page.waitForTimeout(1000);
  }

  // let currentIcon = await allIllustrations.nth(2).allTextContents();
  // currentIcon = toPascalCase(currentIcon[0]);
  // console.log(`${currentIcon}`);
  // writeComponentSkeleton(currentIcon, `./src/components/Undraw/${currentIcon}`);

  // await page.waitForTimeout(1000);
  // await page.getByText("Next").click();
  await page.waitForTimeout(1000);
  await browser.close();
})();
