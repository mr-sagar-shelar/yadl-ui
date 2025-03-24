import type { Meta, StoryObj } from "@storybook/react";
import OnlinePayments from "../OnlinePayments";

const meta: Meta<typeof OnlinePayments> = { title: "unDraw/OnlinePayments", component: OnlinePayments };

export default meta;
type Story = StoryObj<typeof OnlinePayments>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
