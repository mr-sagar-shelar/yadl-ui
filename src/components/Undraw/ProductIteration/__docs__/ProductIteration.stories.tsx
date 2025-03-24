import type { Meta, StoryObj } from "@storybook/react";
import ProductIteration from "../ProductIteration";

const meta: Meta<typeof ProductIteration> = { title: "unDraw/ProductIteration", component: ProductIteration };

export default meta;
type Story = StoryObj<typeof ProductIteration>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
