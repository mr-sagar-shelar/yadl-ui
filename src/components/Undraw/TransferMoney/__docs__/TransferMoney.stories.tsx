import type { Meta, StoryObj } from "@storybook/react";
import TransferMoney from "../TransferMoney";

const meta: Meta<typeof TransferMoney> = { title: "unDraw/TransferMoney", component: TransferMoney };

export default meta;
type Story = StoryObj<typeof TransferMoney>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
