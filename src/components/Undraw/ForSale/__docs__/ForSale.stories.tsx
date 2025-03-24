import type { Meta, StoryObj } from "@storybook/react";
import ForSale from "../ForSale";

const meta: Meta<typeof ForSale> = { title: "unDraw/ForSale", component: ForSale };

export default meta;
type Story = StoryObj<typeof ForSale>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
