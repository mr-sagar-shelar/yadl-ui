import type { Meta, StoryObj } from "@storybook/react";
import CodeGuru from "../CodeGuru";

const meta: Meta<typeof CodeGuru> = { title: "AWS/MachineLearning/CodeGuru", component: CodeGuru };

export default meta;
type Story = StoryObj<typeof CodeGuru>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
