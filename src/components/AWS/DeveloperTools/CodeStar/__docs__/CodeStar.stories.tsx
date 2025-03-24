import type { Meta, StoryObj } from "@storybook/react";
import CodeStar from "../CodeStar";

const meta: Meta<typeof CodeStar> = { title: "AWS/DeveloperTools/CodeStar", component: CodeStar };

export default meta;
type Story = StoryObj<typeof CodeStar>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
