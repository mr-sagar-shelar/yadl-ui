import type { Meta, StoryObj } from "@storybook/react";
import InteriorDesign from "../InteriorDesign";

const meta: Meta<typeof InteriorDesign> = { title: "unDraw/InteriorDesign", component: InteriorDesign };

export default meta;
type Story = StoryObj<typeof InteriorDesign>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
