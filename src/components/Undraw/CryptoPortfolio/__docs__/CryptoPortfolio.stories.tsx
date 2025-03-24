import type { Meta, StoryObj } from "@storybook/react";
import CryptoPortfolio from "../CryptoPortfolio";

const meta: Meta<typeof CryptoPortfolio> = { title: "unDraw/CryptoPortfolio", component: CryptoPortfolio };

export default meta;
type Story = StoryObj<typeof CryptoPortfolio>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
