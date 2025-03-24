import type { Meta, StoryObj } from "@storybook/react";
import BuyHouse from "../BuyHouse";

const meta: Meta<typeof BuyHouse> = { title: "unDraw/BuyHouse", component: BuyHouse };

export default meta;
type Story = StoryObj<typeof BuyHouse>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
