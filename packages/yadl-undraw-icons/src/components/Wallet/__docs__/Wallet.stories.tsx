import type { Meta, StoryObj } from "@storybook/react";
import Wallet from "../Wallet";

const meta: Meta<typeof Wallet> = { title: "unDraw/Wallet", component: Wallet };

export default meta;
type Story = StoryObj<typeof Wallet>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
