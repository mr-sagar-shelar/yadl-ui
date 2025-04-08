import type { Meta, StoryObj } from "@storybook/react";
import CodeCommit from "../CodeCommit";

const meta: Meta<typeof CodeCommit> = { title: "AWS/DeveloperTools/CodeCommit", component: CodeCommit };

export default meta;
type Story = StoryObj<typeof CodeCommit>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
