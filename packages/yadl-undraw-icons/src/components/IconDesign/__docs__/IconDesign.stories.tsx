import type { Meta, StoryObj } from "@storybook/react";
import IconDesign from "../IconDesign";

const meta: Meta<typeof IconDesign> = { title: "unDraw/IconDesign", component: IconDesign };

export default meta;
type Story = StoryObj<typeof IconDesign>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
