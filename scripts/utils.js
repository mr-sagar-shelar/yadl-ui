import fs from "fs";

export const toPascalCase = (str) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return word.toUpperCase();
    })
    .replace(/\s+/g, "");
};

export const writeComponentSkeleton = (componentName, dir) => {
  // const dir = `../src/components/Undraw/${componentName}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    fs.mkdirSync(`${dir}/__docs__`, { recursive: true });
    fs.mkdirSync(`${dir}/__test__`, { recursive: true });

    const exampleContents = `
    import React, { FC } from "react";
    import ${componentName} from "../${componentName}";
    
    const Example = () => {
      return (
        <div>
          <${componentName} />
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
    import * as ${componentName} from "./${componentName}.stories.tsx";
    
    <Meta of={${componentName}} title="unDraw/${componentName}" />
    
    # ${componentName}
    
    ${componentName} component with different props.
    Credit: [unDraw](https://undraw.co/illustrations)
    
    #### Example
    
    <Canvas of={${componentName}.Primary} />
    
    ## Usage
    
    \`\`\`ts
    import { ${componentName} } from "yadl-ui";
    
    const Example = () => {
      return (
          <${componentName} />
      );
    };
    
    export default Example;
    \`\`\`

    #### Credits
    [unDraw](https://undraw.co/illustrations)
    `;
    fs.writeFile(`${dir}/__docs__/${componentName}.mdx`, mdxContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
    });
    const storiesContent = `
    import type { Meta, StoryObj } from "@storybook/react";
    import Example from "./Example";
    
    const meta: Meta<typeof Example> = { title: "unDraw/${componentName}", component: Example };
    
    export default meta;
    type Story = StoryObj<typeof Example>;
    
    export const Primary: Story = { args: {} };
    `;
    fs.writeFile(
      `${dir}/__docs__/${componentName}.stories.tsx`,
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
    import { render } from "@testing-library/react";
    import ${componentName} from "../${componentName}";
    
    describe("${componentName} component", () => {
      it("${componentName} should render correctly", () => {
        render(<${componentName} />);
        expect(true).toBeTruthy();
      });
    });
    
    `;
    fs.writeFile(
      `${dir}/__test__/${componentName}.test.tsx`,
      testFileContents,
      (err) => {
        if (err) {
          console.error(err);
        } else {
          // file written successfully
        }
      },
    );
    const indexContent = `export { default as ${componentName} } from "./${componentName}";`;
    fs.writeFile(`${dir}/index.ts`, indexContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
    });

    const componentContent = `
    const ${componentName} = (props: any) => {
      return (
        <>
          <h3>${componentName}</h3>
        </>
      );
    };
    
    export default ${componentName};`;
    fs.writeFile(`${dir}/${componentName}.tsx`, componentContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
    });
  }
};

export const writeIndexFile = (contents, filePath) => {
  fs.writeFile(filePath, contents, (err) => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
    }
  });
};
