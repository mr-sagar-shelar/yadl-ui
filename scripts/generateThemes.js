import fs from "fs";
import path from "path";
const themeNames = [
  "Arctic",
  "Breeze",
  "Canyon",
  "Celestial",
  "Cosmos",
  "Crystal",
  "Delta",
  "Desert",
  "Eclipse",
  "Equinox",
  "Ether",
  "Fauna",
  "Flora",
  "Frost",
  "Galaxy",
  "Glow",
  "Glimmer",
  "Haze",
  "Horizon",
  "Inferno",
  "Lagoon",
  "Lush",
  "Mirage",
  "Mist",
  "Moonlight",
  "Mystic",
  "Nimbus",
  "Oasis",
  "Opal",
  "Orbit",
  "Phoenix",
  "Polar",
  "Pulse",
  "Radient",
  "Ripple",
  "River",
  "Saffron",
  "Serenity",
  "Shadow",
  "Shimmer",
  "Solace",
  "Solar",
  "Spark",
  "Stardust",
  "Stellar",
  "Tempest",
  "Terra",
  "Tide",
  "Vapor",
  "Zenith",
];

function createThemeFiles() {
  // read the contents of the directory
  const dir = "./public/Themes/";

  fs.readFile(
    `./public/Themes/Template.css`,
    "utf8",
    async function (err, templateCode) {
      console.log(`${templateCode}`);

      for (const file of themeNames) {
        // build the full path of the file
        const filePath = path.join(dir, `${file}.css`);
        let currentContent = templateCode.replaceAll("THEME_NAME", file);

        console.log(`Path:  ${filePath}`);
        console.log(`${currentContent}`);
        fs.writeFile(filePath, currentContent, (err) => {
          if (err) {
            console.error(err);
          }
        });
      }
    },
  );
}

createThemeFiles();
