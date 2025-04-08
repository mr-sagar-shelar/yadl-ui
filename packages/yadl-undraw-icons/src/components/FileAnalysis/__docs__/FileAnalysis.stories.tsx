import type { Meta, StoryObj } from "@storybook/react";
import FileAnalysis from "../FileAnalysis";

const meta: Meta<typeof FileAnalysis> = { title: "unDraw/FileAnalysis", component: FileAnalysis };

export default meta;
type Story = StoryObj<typeof FileAnalysis>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
