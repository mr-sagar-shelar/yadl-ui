import type { Meta, StoryObj } from "@storybook/react";
import BusinessShop from "../BusinessShop";

const meta: Meta<typeof BusinessShop> = { title: "unDraw/BusinessShop", component: BusinessShop };

export default meta;
type Story = StoryObj<typeof BusinessShop>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
