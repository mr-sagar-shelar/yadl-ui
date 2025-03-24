import {
  writeComponentSkeleton,
  writeIndexFile,
  toPascalCase,
} from "./utils.js";
import fs from "fs";
import { transform } from "@svgr/core";

(async () => {
  const rootFolder = "./Azure";

  fs.readdir(rootFolder, (err, folders) => {
    folders.forEach((currentFolder) => {
      let folderName = `${rootFolder}/${currentFolder}`;
      let updatedFolderName = toPascalCase(currentFolder.replaceAll("+", ""));
      // console.log(`${folderName},   ${updatedFolderName}`);

      fs.readdir(folderName, (err, folders) => {
        folders.forEach((file) => {
          if (!file.toLowerCase().endsWith(".png")) {
            let fileName = file;
            fileName = fileName.substring(19, fileName.length - 4);
            fileName = fileName.replaceAll("-", "");
            fileName = fileName.replaceAll("(", "");
            fileName = fileName.replaceAll("+", "");
            fileName = fileName.replaceAll(")", "");
            fileName = fileName.replaceAll("&", "");
            fileName = toPascalCase(fileName);
            console.log(`${fileName}`);
            fs.readFile(
              `${folderName}/${file}`,
              "utf8",
              async function (err, svgCode) {
                // svgCode = svgCode.replaceAll("#F4F2ED", "var(--color-base-content)");
                // svgCode = svgCode.replace(/<!--([^;]*)-->/i, "");
                // console.log(`${folderName}/${fileName} \n\n${svgCode}`);
                // fileName = toPascalCase(fileName.replaceAll("_", " "));
                // console.log(`${svgCode}`);
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
                  // console.log(`./src/components/Azure/${fileName}`);
                  writeComponentSkeleton(
                    fileName,
                    `./src/components/Azure/${updatedFolderName}/${fileName}`,
                    componentCode,
                    `Azure/${updatedFolderName}`,
                    "https://learn.microsoft.com/en-us/azure/architecture/icons/",
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
                // indexFileContents = `${indexFileContents}\nexport * from "./${fileName}";`;
              },
            );
          }
        });
      });
    });
  });
  // writeIndexFile(indexFileContents, `./src/components/Azure/index.ts`);
})();
