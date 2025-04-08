import type { Meta, StoryObj } from "@storybook/react";
import ProductTour from "../ProductTour";

const meta: Meta<typeof ProductTour> = { title: "unDraw/ProductTour", component: ProductTour };

export default meta;
type Story = StoryObj<typeof ProductTour>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
