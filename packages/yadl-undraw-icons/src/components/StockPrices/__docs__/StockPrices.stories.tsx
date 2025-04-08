import type { Meta, StoryObj } from "@storybook/react";
import StockPrices from "../StockPrices";

const meta: Meta<typeof StockPrices> = { title: "unDraw/StockPrices", component: StockPrices };

export default meta;
type Story = StoryObj<typeof StockPrices>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
