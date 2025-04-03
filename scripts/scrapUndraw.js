import { chromium } from "playwright";
import {
  writeUndrawComponentSkeleton,
  writeIndexFile,
  toPascalCase,
  toCamelCase,
  toSpacedCase,
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
  let fileNames = "";

  for (let i = 0; i < 18; i++) {
    const allIllustrations = await page
      .locator(".appcontainer")
      .nth(2)
      .locator(".bg-gray-50");
    const illustrationCount = await allIllustrations.count();
    // console.log(`********* illustrations = ${illustrationCount}`);

    // for (let i = 0; i < illustrationCount; i++) {
    for (let j = 0; j < illustrationCount; j++) {
      const currentIcon = await allIllustrations.nth(j);
      let iconName = await currentIcon.allTextContents();
      iconName = `${iconName}`.trim();
      // if (iconName.length < 50) {
      //   console.log(`$${i + 1}-${j + 1}: ${iconName}`);
      //   fileNames = `${fileNames}\n$${i}-${j}: ${iconName}";`;
      // } else {
      //   fileNames = `${fileNames}\nIssue On:  $${i}-${j}";`;
      // }

      if (iconName.length < 50) {
        iconName = toPascalCase(iconName);

        let originalFileName = iconName;

        // let svgCode = await currentIcon
        //   .getByRole("img")
        //   .first()
        //   .evaluate((evaluate) =>
        //     evaluate.parentElement.innerHTML.replaceAll(
        //       "currentColor",
        //       "var(--color-primary)",
        //     ),
        //   );
        // console.log(`${svgCode}`);

        try {
          // const componentCode = await transform(
          //   svgCode,
          //   {
          //     plugins: [
          //       "@svgr/plugin-svgo",
          //       "@svgr/plugin-jsx",
          //       "@svgr/plugin-prettier",
          //     ],
          //     icon: true,
          //     jsxRuntime: "automatic",
          //     typescript: true,
          //     memo: true,
          //     svgo: true,
          //   },
          //   { componentName: iconName },
          // );
          // console.log(`${componentCode}`);

          const indexName = `Undraw${iconName}`.replaceAll(" ", "");
          const newPayload = {
            name: toSpacedCase(originalFileName).trim(),
            icon: indexName,
          };
          // console.log(`${toCamelCase(indexName)}: "${indexName}" ,`);
          console.log(
            `${toCamelCase(indexName)}: ${JSON.stringify(newPayload)} ,`,
          );

          // writeUndrawComponentSkeleton(
          //   iconName,
          //   `./src/components/Undraw/${iconName}`,
          //   componentCode,
          // );
        } catch (error) {
          // console.error(`${iconName}\n`);
          // fs.appendFile("./Errors.txt", `Error: ${iconName}\n`, function (err) {
          //   if (err) throw err;
          //   // console.log("Saved!");
          // });
        }
        indexFileContents = `${indexFileContents}\nexport * from "./${iconName}";`;
      }
    }

    // writeIndexFile(fileNames, `./src/components/fileNames.txt`);
    // writeIndexFile(indexFileContents, `./src/components/Undraw/index.ts`);

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
