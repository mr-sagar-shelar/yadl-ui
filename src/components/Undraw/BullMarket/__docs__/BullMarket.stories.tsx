import type { Meta, StoryObj } from "@storybook/react";
import BullMarket from "../BullMarket";

const meta: Meta<typeof BullMarket> = { title: "unDraw/BullMarket", component: BullMarket };

export default meta;
type Story = StoryObj<typeof BullMarket>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
