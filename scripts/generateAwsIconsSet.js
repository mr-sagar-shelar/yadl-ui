import {
  writeComponentSkeleton,
  writeIndexFile,
  toPascalCase,
} from "./utils.js";
import fs from "fs";
import { transform } from "@svgr/core";

(async () => {
  const rootFolder = "./aws";
  let indexFileContents = "";
  const commentRegex = /<!--([^;]*)-->/i;

  fs.readdir(rootFolder, (err, folders) => {
    folders.forEach((currentFolder) => {
      let folderName = `${rootFolder}/${currentFolder}`;
      // console.log(`${folderName}`);

      fs.readdir(folderName, (err, folders) => {
        folders.forEach((file) => {
          let fileName = file;
          fileName = fileName.replaceAll("-", "");
          fileName = fileName.replaceAll("&", "");
          fileName = fileName.replaceAll("Light", "");
          fileName = fileName.substring(0, fileName.length - 4);
          fileName = toPascalCase(fileName);
          // console.log(`${fileName}`);
          // console.log(`$$$$$$$$$$$$$$$$$$$$$  ${folderName}/${fileName}`);
          fs.readFile(
            `${folderName}/${file}`,
            "utf8",
            async function (err, svgCode) {
              // svgCode = svgCode.replaceAll("#F4F2ED", "var(--color-base-content)");
              // svgCode = svgCode.replace(/<!--([^;]*)-->/i, "");
              // console.log(`${folderName}/${fileName} \n\n${svgCode}`);
              try {
                // console.log(`$$$$ Transforming ${fileName}`);
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
                  { componentName: fileName },
                );
                // console.log(`${componentCode}`);
                let folderNameUpdated = currentFolder.replaceAll("-", "");
                console.log(
                  `./src/components/AWS/${folderNameUpdated}/${fileName}`,
                );

                writeComponentSkeleton(
                  fileName,
                  `./src/components/AWS/${folderNameUpdated}/${fileName}`,
                  componentCode,
                  `AWS/${folderNameUpdated}`,
                  "https://aws-icons.com/",
                );
              } catch (error) {
                console.log(`Error Transforming ${fileName}`);
                console.error(error);
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
        });
      });
    });
  });
  // writeIndexFile(indexFileContents, `./src/components/AWS/index.ts`);
})();
