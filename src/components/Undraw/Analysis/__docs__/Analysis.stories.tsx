import type { Meta, StoryObj } from "@storybook/react";
import Analysis from "../Analysis";

const meta: Meta<typeof Analysis> = { title: "unDraw/Analysis", component: Analysis };

export default meta;
type Story = StoryObj<typeof Analysis>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
