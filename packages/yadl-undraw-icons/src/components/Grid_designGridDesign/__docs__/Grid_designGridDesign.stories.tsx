import type { Meta, StoryObj } from "@storybook/react";
import Grid_designGridDesign from "../Grid_designGridDesign";

const meta: Meta<typeof Grid_designGridDesign> = { title: "unDraw/Grid_designGridDesign", component: Grid_designGridDesign };

export default meta;
type Story = StoryObj<typeof Grid_designGridDesign>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
