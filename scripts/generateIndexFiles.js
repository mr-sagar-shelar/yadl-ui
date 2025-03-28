import fs from "fs";
import path from "path";

function searchFile(dir, fileName) {
  // read the contents of the directory
  const files = fs.readdirSync(dir);
  let currentIndexContents = [];

  // search through the files
  for (const file of files) {
    // build the full path of the file
    const filePath = path.join(dir, file);

    // get the file stats
    const fileStat = fs.statSync(filePath);

    // if the file is a directory, recursively search the directory
    if (fileStat.isDirectory()) {
      if (!(file.endsWith("__") || file.includes("Light"))) {
        // console.log(filePath);
        currentIndexContents = `${currentIndexContents}\nexport * from "./${file}";`;
      }
      searchFile(filePath, fileName);
    } else if (
      !(
        file.endsWith("stories.tsx") ||
        file.endsWith("test.tsx") ||
        file.endsWith("test.ts")
      )
    ) {
      // if the file is a match, print it
      // console.log(filePath);
    }
  }

  console.log(`$$$$$$ ${currentIndexContents}`);
}

searchFile("./src/components/GCP/", "Button.tsx");
