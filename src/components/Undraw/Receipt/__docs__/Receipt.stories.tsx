import type { Meta, StoryObj } from "@storybook/react";
import Receipt from "../Receipt";

const meta: Meta<typeof Receipt> = { title: "unDraw/Receipt", component: Receipt };

export default meta;
type Story = StoryObj<typeof Receipt>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
