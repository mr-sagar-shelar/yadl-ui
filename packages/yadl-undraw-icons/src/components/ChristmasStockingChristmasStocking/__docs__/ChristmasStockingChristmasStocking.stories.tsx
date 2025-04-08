import type { Meta, StoryObj } from "@storybook/react";
import ChristmasStockingChristmasStocking from "../ChristmasStockingChristmasStocking";

const meta: Meta<typeof ChristmasStockingChristmasStocking> = { title: "unDraw/ChristmasStockingChristmasStocking", component: ChristmasStockingChristmasStocking };

export default meta;
type Story = StoryObj<typeof ChristmasStockingChristmasStocking>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
