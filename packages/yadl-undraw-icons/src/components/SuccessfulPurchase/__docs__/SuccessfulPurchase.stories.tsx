import type { Meta, StoryObj } from "@storybook/react";
import SuccessfulPurchase from "../SuccessfulPurchase";

const meta: Meta<typeof SuccessfulPurchase> = { title: "unDraw/SuccessfulPurchase", component: SuccessfulPurchase };

export default meta;
type Story = StoryObj<typeof SuccessfulPurchase>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
