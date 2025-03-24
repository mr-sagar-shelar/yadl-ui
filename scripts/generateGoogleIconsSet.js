import {
  writeComponentSkeleton,
  writeIndexFile,
  toPascalCase,
} from "./utils.js";
import fs from "fs";
import { transform } from "@svgr/core";

(async () => {
  const rootFolder = "./google-cloud-icons";
  let indexFileContents = "";

  fs.readdir(rootFolder, (err, folders) => {
    folders.forEach((currentFolder) => {
      let folderName = `${rootFolder}/${currentFolder}`;
      console.log(`${folderName}`);

      fs.readdir(folderName, (err, folders) => {
        folders.forEach((file) => {
          if (!file.toLowerCase().endsWith(".png")) {
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
                fileName = toPascalCase(fileName.replaceAll("_", " "));

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
                  // console.log(`./src/components/GCP/${fileName}`);

                  writeComponentSkeleton(
                    fileName,
                    `./src/components/GCP/${fileName}`,
                    componentCode,
                    `GCP`,
                    "https://cloud.google.com/icons",
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
  // writeIndexFile(indexFileContents, `./src/components/GCP/index.ts`);
})();
