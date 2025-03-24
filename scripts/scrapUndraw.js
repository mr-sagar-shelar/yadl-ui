import { chromium } from "playwright";
import {
  writeUndrawComponentSkeleton,
  writeIndexFile,
  toPascalCase,
} from "./utils.js";
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
  await page.goto("https://undraw.co/illustrations");
  await page.waitForLoadState("domcontentloaded");
  let indexFileContents = "";

  for (let i = 0; i < 36; i++) {
    const allIllustrations = await page
      .locator(".appcontainer")
      .nth(2)
      .locator(".bg-gray-50");
    const illustrationCount = await allIllustrations.count();
    console.log(`********* illustrations = ${illustrationCount}`);

    // for (let i = 0; i < illustrationCount; i++) {
    for (let i = 0; i < illustrationCount; i++) {
      const currentIcon = await allIllustrations.nth(i);
      let iconName = await currentIcon.allTextContents();
      iconName = toPascalCase(iconName[0]);
      // console.log(`${iconName}`);

      let svgCode = await currentIcon
        .getByRole("img")
        .first()
        .evaluate((evaluate) =>
          evaluate.parentElement.innerHTML.replaceAll(
            "currentColor",
            "var(--color-primary)",
          ),
        );
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
            memo: true,
            svgo: true,
          },
          { componentName: iconName },
        );

        // console.log(`${componentCode}`);

        writeUndrawComponentSkeleton(
          iconName,
          `./src/components/Undraw/${iconName}`,
          componentCode,
        );
      } catch (error) {
        // console.error(`${iconName}\n`);
        fs.appendFile("./Errors.txt", `Error: ${iconName}\n`, function (err) {
          if (err) throw err;
          // console.log("Saved!");
        });
      }
      indexFileContents = `${indexFileContents}\nexport * from "./${iconName}";`;
    }

    writeIndexFile(indexFileContents, `./src/components/Undraw/index.ts`);

    await page.waitForTimeout(1000);
    // await page.getByText("Next ").click();
    await page.getByRole("link", { name: "Next" }).click();
    await page.waitForLoadState("domcontentloaded");
    await page.waitForTimeout(3000);
  }

  // let currentIcon = await allIllustrations.nth(2).allTextContents();
  // currentIcon = toPascalCase(currentIcon[0]);
  // console.log(`${currentIcon}`);
  // writeUndrawComponentSkeleton(currentIcon, `./src/components/Undraw/${currentIcon}`);

  // await page.waitForTimeout(1000);
  // await page.getByText("Next").click();
  await page.waitForTimeout(1000);
  await browser.close();
})();
