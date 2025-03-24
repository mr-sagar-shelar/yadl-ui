import type { Meta, StoryObj } from "@storybook/react";
import ProductExplainer from "../ProductExplainer";

const meta: Meta<typeof ProductExplainer> = { title: "unDraw/ProductExplainer", component: ProductExplainer };

export default meta;
type Story = StoryObj<typeof ProductExplainer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
