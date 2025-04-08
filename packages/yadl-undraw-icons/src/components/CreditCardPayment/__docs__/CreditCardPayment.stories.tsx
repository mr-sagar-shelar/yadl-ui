import type { Meta, StoryObj } from "@storybook/react";
import CreditCardPayment from "../CreditCardPayment";

const meta: Meta<typeof CreditCardPayment> = { title: "unDraw/CreditCardPayment", component: CreditCardPayment };

export default meta;
type Story = StoryObj<typeof CreditCardPayment>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
