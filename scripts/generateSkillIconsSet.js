import { chromium } from "playwright";

import {
  writeComponentSkeleton,
  writeIndexFile,
  toPascalCase,
} from "./utils.js";
import fs from "fs";
import { transform } from "@svgr/core";

(async () => {
  const folderName = "./skill-icons";
  let indexFileContents = "";

  fs.readdir(folderName, (err, files) => {
    files.forEach((file) => {
      let fileName = file;
      fileName = fileName.replaceAll("-", "");
      fileName = fileName.replaceAll("Light", "");
      fileName = fileName.substring(0, fileName.length - 4);
      if (!fileName.toLowerCase().includes("dark")) {
        // console.log(`D: ${toPascalCase(fileName)}`);
        fs.readFile(
          `${folderName}/${file}`,
          "utf8",
          async function (err, svgCode) {
            // svgCode = svgCode.replaceAll("#F4F2ED", "var(--color-base-content)");
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
                { componentName: fileName },
              );

              // console.log(`${componentCode}`);
              writeComponentSkeleton(
                fileName,
                `./src/components/SkillSet/${fileName}`,
                componentCode,
                "SkillSet",
                "https://skillicons.dev",
              );
            } catch (error) {
              fs.appendFile(
                "./Errors.txt",
                `Error: ${fileName}\n`,
                function (err) {
                  if (err) throw err;
                },
              );
            }
            indexFileContents = `${indexFileContents}\nexport * from "./${fileName}";`;
          },
        );
      }
    });
  });

  writeIndexFile(indexFileContents, `./src/components/SkillSet/index.ts`);
})();
