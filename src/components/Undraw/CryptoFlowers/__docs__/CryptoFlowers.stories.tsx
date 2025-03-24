import type { Meta, StoryObj } from "@storybook/react";
import CryptoFlowers from "../CryptoFlowers";

const meta: Meta<typeof CryptoFlowers> = { title: "unDraw/CryptoFlowers", component: CryptoFlowers };

export default meta;
type Story = StoryObj<typeof CryptoFlowers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
