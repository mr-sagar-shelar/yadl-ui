import type { Meta, StoryObj } from "@storybook/react";
import CodeDeploy from "../CodeDeploy";

const meta: Meta<typeof CodeDeploy> = { title: "AWS/DeveloperTools/CodeDeploy", component: CodeDeploy };

export default meta;
type Story = StoryObj<typeof CodeDeploy>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
