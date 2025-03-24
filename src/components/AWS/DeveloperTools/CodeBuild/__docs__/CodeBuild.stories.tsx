import type { Meta, StoryObj } from "@storybook/react";
import CodeBuild from "../CodeBuild";

const meta: Meta<typeof CodeBuild> = { title: "AWS/DeveloperTools/CodeBuild", component: CodeBuild };

export default meta;
type Story = StoryObj<typeof CodeBuild>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
