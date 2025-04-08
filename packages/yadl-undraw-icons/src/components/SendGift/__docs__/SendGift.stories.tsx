import type { Meta, StoryObj } from "@storybook/react";
import SendGift from "../SendGift";

const meta: Meta<typeof SendGift> = { title: "unDraw/SendGift", component: SendGift };

export default meta;
type Story = StoryObj<typeof SendGift>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
