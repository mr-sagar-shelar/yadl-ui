import type { Meta, StoryObj } from "@storybook/react";
import GiftBox from "../GiftBox";

const meta: Meta<typeof GiftBox> = { title: "unDraw/GiftBox", component: GiftBox };

export default meta;
type Story = StoryObj<typeof GiftBox>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
