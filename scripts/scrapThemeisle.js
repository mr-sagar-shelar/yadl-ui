import { chromium } from "playwright";
import { writeComponentSkeleton, writeIndexFile } from "./utils.js";
import fs from "fs";
import { transform } from "@svgr/core";

(async () => {
  const browser = await chromium.launch({
    headless: false,
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://themeisle.com/illustrations/");
  await page.waitForLoadState("domcontentloaded");
  let currentCount = 0;

  let allIllustrations = await page.locator(".illustrations").first();

  while (currentCount < 500) {
    allIllustrations = await page.locator(".illustrations").first();
    currentCount = await allIllustrations.getByRole("img").count();
    console.log(`********* currentCount = ${currentCount}`);

    await page.mouse.wheel(0, 1500);
    await page.waitForTimeout(1000);
  }

  allIllustrations = await page.locator(".illustrations").first();
  const allImages = await allIllustrations.getByRole("img");

  // for (let i = 0; i < illustrationCount; i++) {
  for (let i = 0; i < currentCount; i++) {
    console.log(`Starting ${i}`);
    const iconName = `Themeisle${i + 1}`;
    let svgCode = await allImages.nth(i).evaluate((evaluate) => {
      let content = evaluate.parentElement.innerHTML.replaceAll(
        "#666AF6",
        "var(--color-primary)",
      );
      content = content.replaceAll("#fff", "transparent");
      return content;
    });
    // console.log(`${svgCode}`);

    try {
      const componentCode = await transform(
        svgCode,
        {
          plugins: [
            "@svgr/plugin-svgo",
            "@svgr/plugin-jsx",
            "@svgr/plugin-prettier",
          ],
          icon: true,
          jsxRuntime: "automatic",
          typescript: true,
        },
        { componentName: iconName },
      );

      // console.log(`${componentCode}`);

      writeComponentSkeleton(
        iconName,
        `./src/components/Themeisle/${iconName}`,
        componentCode,
        "Themeisle",
        "https://themeisle.com/illustrations",
      );
    } catch (error) {
      // console.error(`${iconName}\n`);
      fs.appendFile("./Errors.txt", `Error: ${iconName}\n`, function (err) {
        if (err) throw err;
        // console.log("Saved!");
      });
    }
    // indexFileContents = `${indexFileContents}\nexport * from "./${iconName}";`;
  }

  // writeIndexFile(indexFileContents, `./src/components/Undraw/index.ts`);

  // await page.waitForTimeout(1000);
  // await page.getByText("Next ").click();
  // await page.getByRole("link", { name: "Next" }).click();
  // await page.waitForLoadState("domcontentloaded");
  // await page.waitForTimeout(3000);

  await page.waitForTimeout(1000);
  await browser.close();
})();
