import type { Meta, StoryObj } from "@storybook/react";
import BitcoinP2P from "../BitcoinP2P";

const meta: Meta<typeof BitcoinP2P> = { title: "unDraw/BitcoinP2P", component: BitcoinP2P };

export default meta;
type Story = StoryObj<typeof BitcoinP2P>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
