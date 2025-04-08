import type { Meta, StoryObj } from "@storybook/react";
import ProductTeardown from "../ProductTeardown";

const meta: Meta<typeof ProductTeardown> = { title: "unDraw/ProductTeardown", component: ProductTeardown };

export default meta;
type Story = StoryObj<typeof ProductTeardown>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
