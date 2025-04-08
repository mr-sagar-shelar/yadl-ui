import type { Meta, StoryObj } from "@storybook/react";
import DocumentAnalysis from "../DocumentAnalysis";

const meta: Meta<typeof DocumentAnalysis> = { title: "unDraw/DocumentAnalysis", component: DocumentAnalysis };

export default meta;
type Story = StoryObj<typeof DocumentAnalysis>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
