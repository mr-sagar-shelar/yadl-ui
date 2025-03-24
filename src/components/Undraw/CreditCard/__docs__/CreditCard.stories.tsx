import type { Meta, StoryObj } from "@storybook/react";
import CreditCard from "../CreditCard";

const meta: Meta<typeof CreditCard> = { title: "unDraw/CreditCard", component: CreditCard };

export default meta;
type Story = StoryObj<typeof CreditCard>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
