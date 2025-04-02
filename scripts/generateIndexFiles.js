import fs from "fs";
import path from "path";

function searchFile(dir, fileName) {
  if (dir.endsWith("__")) {
    return;
  }
  // read the contents of the directory
  const files = fs.readdirSync(dir);
  let currentIndexContents = "";

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

  if (currentIndexContents) {
    console.log(`${dir}/index.ts --- ${currentIndexContents}`);
    fs.writeFile(`${dir}/index.ts`, currentIndexContents, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
}

searchFile("./src/components/GCP/", "Button.tsx");
