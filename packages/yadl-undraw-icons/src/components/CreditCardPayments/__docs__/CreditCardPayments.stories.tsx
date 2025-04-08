import type { Meta, StoryObj } from "@storybook/react";
import CreditCardPayments from "../CreditCardPayments";

const meta: Meta<typeof CreditCardPayments> = { title: "unDraw/CreditCardPayments", component: CreditCardPayments };

export default meta;
type Story = StoryObj<typeof CreditCardPayments>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
