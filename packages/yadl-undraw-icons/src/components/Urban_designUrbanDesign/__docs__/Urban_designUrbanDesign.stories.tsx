import type { Meta, StoryObj } from "@storybook/react";
import Urban_designUrbanDesign from "../Urban_designUrbanDesign";

const meta: Meta<typeof Urban_designUrbanDesign> = { title: "unDraw/Urban_designUrbanDesign", component: Urban_designUrbanDesign };

export default meta;
type Story = StoryObj<typeof Urban_designUrbanDesign>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
