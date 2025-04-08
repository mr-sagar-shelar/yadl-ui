import type { Meta, StoryObj } from "@storybook/react";
import JewelleriesJewelry from "../JewelleriesJewelry";

const meta: Meta<typeof JewelleriesJewelry> = { title: "unDraw/JewelleriesJewelry", component: JewelleriesJewelry };

export default meta;
type Story = StoryObj<typeof JewelleriesJewelry>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
