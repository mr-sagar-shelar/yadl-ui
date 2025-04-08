import type { Meta, StoryObj } from "@storybook/react";
import Product_photographyProductPhotography from "../Product_photographyProductPhotography";

const meta: Meta<typeof Product_photographyProductPhotography> = { title: "unDraw/Product_photographyProductPhotography", component: Product_photographyProductPhotography };

export default meta;
type Story = StoryObj<typeof Product_photographyProductPhotography>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
