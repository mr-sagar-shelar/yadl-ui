import type { Meta, StoryObj } from "@storybook/react";
import BuildingBlocks from "../BuildingBlocks";

const meta: Meta<typeof BuildingBlocks> = { title: "unDraw/BuildingBlocks", component: BuildingBlocks };

export default meta;
type Story = StoryObj<typeof BuildingBlocks>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
