import type { Meta, StoryObj } from "@storybook/react";
import Segmentation from "../Segmentation";

const meta: Meta<typeof Segmentation> = { title: "unDraw/Segmentation", component: Segmentation };

export default meta;
type Story = StoryObj<typeof Segmentation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
