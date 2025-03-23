import { chromium } from "playwright";
import fs from "fs";
(async () => {
  const browser = await chromium.launch({
    headless: false,
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://undraw.co/illustrations");

  const allIllustrations = await page
    .locator(".appcontainer")
    .nth(2)
    .locator(".bg-gray-50");
  const illustrationCount = await allIllustrations.count();
  console.log(`illustrations = ${illustrationCount}`);

  const toPascalCase = (str) => {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return word.toUpperCase();
      })
      .replace(/\s+/g, "");
  };

  // const texts = await allIllustrations.allTextContents();
  // console.log(`texts = ${texts}`);

  // for (let i = 0; i < illustrationCount; i++) {
  //   const currentIcon = await allIllustrations.nth(i);
  //   const iconName = await currentIcon.allTextContents();
  //   console.log(`${toPascalCase(iconName[0])}`);
  //   // console.log(`${iconName}`);

  //   // const temp = await allIllustrations.nth(i).locator(".injected-svg").count();
  //   // console.log(`${temp}`);
  //   // const svgContent = await currentIcon.querySelector(".injected-svg");
  //   // console.log(`${svgContent}`);
  // }

  let currentIcon = await allIllustrations.nth(2).allTextContents();
  currentIcon = toPascalCase(currentIcon[0]);
  console.log(`${currentIcon}`);

  const dir = `./src/components/Undraw/${currentIcon}`;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    fs.mkdirSync(`${dir}/__docs__`, { recursive: true });
    fs.mkdirSync(`${dir}/__test__`, { recursive: true });
    const content = "Some content!";

    const exampleContents = `
import React, { FC } from "react";
import ${currentIcon} from "../${currentIcon}";

const Example = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <${currentIcon} />
    </div>
  );
};

export default Example;

`;
    fs.writeFile(`${dir}/__docs__/Example.tsx`, exampleContents, (err) => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
    });
    const mdxContent = `
import { Canvas, Meta } from "@storybook/blocks";
import Example from "./Example.tsx";
import * as ${currentIcon} from "./${currentIcon}.stories.tsx";

<Meta of={${currentIcon}} title="${currentIcon}" />

# ${currentIcon}

${currentIcon} component with different props.

#### Example

<Canvas of={${currentIcon}.Primary} />

## Usage

\`\`\`ts
import {${currentIcon}} from "yadl-ui";

const Example = () => {
  return (
      <${currentIcon}
        size={"small"}
        text={"${currentIcon}"}
        onClick={()=> console.log("Clicked")}
        primary
      />
  );
};

export default Example;
\`\`\`
`;
    fs.writeFile(`${dir}/__docs__/${currentIcon}.mdx`, mdxContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
    });
    const storiesContent = `
import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = { title: "${currentIcon}", component: Example };

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = { args: {} };
`;
    fs.writeFile(
      `${dir}/__docs__/${currentIcon}.stories.tsx`,
      storiesContent,
      (err) => {
        if (err) {
          console.error(err);
        } else {
          // file written successfully
        }
      },
    );
    const testFileContents = `
import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ${currentIcon} from "../${currentIcon}";

describe("${currentIcon} component", () => {
  it("${currentIcon} should render correctly", () => {
    render(<${currentIcon} />);
    expect(true).toBeTruthy();
  });
});

`;
    fs.writeFile(
      `${dir}/__test__/${currentIcon}.test.tsx`,
      testFileContents,
      (err) => {
        if (err) {
          console.error(err);
        } else {
          // file written successfully
        }
      },
    );
    const indexContent = `export { default as ${currentIcon} } from "./${currentIcon}";`;
    fs.writeFile(`${dir}/index.ts`, indexContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
    });

    const componentContent = `
const ${currentIcon} = (props: any) => {
  return (
    <>
    </>
  );
};

export default ${currentIcon};`;
    fs.writeFile(`${dir}/${currentIcon}.tsx`, componentContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
    });
  }

  // const firstIcon = await allIllustrations.nth(2).locator("svg").count();
  // console.log(`firstIcon = ${firstIcon}`);

  // await page.waitForTimeout(1000);
  // await page.getByText("Next").click();
  await page.waitForTimeout(1000);
  await browser.close();
})();
