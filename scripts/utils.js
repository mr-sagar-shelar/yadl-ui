import fs from "fs";

export const getExampleContents = (componentName) => {
  return `import React, { FC } from "react";
  import ${componentName} from "../${componentName}";
  
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
        <${componentName} width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  `;
};

export const getMDXContent = (componentName, title, url) => {
  return `import { Canvas, Meta } from "@storybook/blocks";
import Example from "./Example.tsx";
import * as ${componentName} from "./${componentName}.stories.tsx";

<Meta of={${componentName}} title="${title}/${componentName}" />

# ${componentName}

${componentName} component with different props.

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
[${title}](${url})
`;
};

export const toPascalCase = (str) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return word.toUpperCase();
    })
    .replace(/\s+/g, "");
};

export const getStoriesContent = (componentName, title) => {
  return `import type { Meta, StoryObj } from "@storybook/react";
import ${componentName} from "../${componentName}";

const meta: Meta<typeof ${componentName}> = { title: "${title}/${componentName}", component: ${componentName} };

export default meta;
type Story = StoryObj<typeof ${componentName}>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
`;
};

export const getTestFileContents = (componentName) => {
  return `import React from "react";
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
};

export const getIndexContents = (componentName, title) => {
  return `export { default as ${title.replaceAll("/", "")}${componentName} } from "./${componentName}";`;
};

export const writeUndrawComponentSkeleton = (
  componentName,
  dir,
  componentCode,
) => {
  fs.mkdirSync(dir, { recursive: true });
  fs.mkdirSync(`${dir}/__docs__`, { recursive: true });
  fs.mkdirSync(`${dir}/__test__`, { recursive: true });
  // fs.writeFile(
  //   `${dir}/__docs__/Example.tsx`,
  //   getExampleContents(componentName),
  //   (err) => {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       // file written successfully
  //     }
  //   },
  // );

  // fs.writeFile(
  //   `${dir}/__docs__/${componentName}.mdx`,
  //   getMDXContent(componentName, "unDraw", "https://undraw.co/illustrations"),
  //   (err) => {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       // file written successfully
  //     }
  //   },
  // );

  fs.writeFile(
    `${dir}/__docs__/${componentName}.stories.tsx`,
    getStoriesContent(componentName, "unDraw"),
    (err) => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
    },
  );

  // fs.writeFile(
  //   `${dir}/__test__/${componentName}.test.tsx`,
  //   getTestFileContents(componentName),
  //   (err) => {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       // file written successfully
  //     }
  //   },
  // );
  // fs.writeFile(`${dir}/index.ts`, getIndexContents(componentName), (err) => {
  //   if (err) {
  //     console.error(err);
  //   } else {
  //     // file written successfully
  //   }
  // });

  // fs.writeFile(`${dir}/${componentName}.tsx`, componentCode, (err) => {
  //   if (err) {
  //     console.error(err);
  //   } else {
  //     // file written successfully
  //   }
  // });
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

export const writeComponentSkeleton = (
  componentName,
  dir,
  componentCode,
  title,
  sourceUrl,
) => {
  fs.mkdirSync(dir, { recursive: true });
  fs.mkdirSync(`${dir}/__docs__`, { recursive: true });
  fs.mkdirSync(`${dir}/__test__`, { recursive: true });

  // fs.writeFile(
  //   `${dir}/__docs__/Example.tsx`,
  //   getExampleContents(componentName),
  //   (err) => {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       // file written successfully
  //     }
  //   },
  // );
  // fs.writeFile(
  //   `${dir}/__docs__/${componentName}.mdx`,
  //   getMDXContent(componentName, title, sourceUrl),
  //   (err) => {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       // file written successfully
  //     }
  //   },
  // );
  fs.writeFile(
    `${dir}/__docs__/${componentName}.stories.tsx`,
    getStoriesContent(componentName, title),
    (err) => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
    },
  );
  fs.writeFile(
    `${dir}/__test__/${componentName}.test.tsx`,
    getTestFileContents(componentName),
    (err) => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
    },
  );
  fs.writeFile(
    `${dir}/index.ts`,
    getIndexContents(componentName, title),
    (err) => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
    },
  );

  fs.writeFile(`${dir}/${componentName}.tsx`, componentCode, (err) => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
    }
  });
};
