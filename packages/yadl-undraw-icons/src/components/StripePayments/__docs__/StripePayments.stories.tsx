import type { Meta, StoryObj } from "@storybook/react";
import StripePayments from "../StripePayments";

const meta: Meta<typeof StripePayments> = { title: "unDraw/StripePayments", component: StripePayments };

export default meta;
type Story = StoryObj<typeof StripePayments>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
