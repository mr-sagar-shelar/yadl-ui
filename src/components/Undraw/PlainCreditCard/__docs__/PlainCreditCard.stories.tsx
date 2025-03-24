import type { Meta, StoryObj } from "@storybook/react";
import PlainCreditCard from "../PlainCreditCard";

const meta: Meta<typeof PlainCreditCard> = { title: "unDraw/PlainCreditCard", component: PlainCreditCard };

export default meta;
type Story = StoryObj<typeof PlainCreditCard>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
