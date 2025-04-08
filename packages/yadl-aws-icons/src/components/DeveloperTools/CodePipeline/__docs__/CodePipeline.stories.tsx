import type { Meta, StoryObj } from "@storybook/react";
import CodePipeline from "../CodePipeline";

const meta: Meta<typeof CodePipeline> = { title: "AWS/DeveloperTools/CodePipeline", component: CodePipeline };

export default meta;
type Story = StoryObj<typeof CodePipeline>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
