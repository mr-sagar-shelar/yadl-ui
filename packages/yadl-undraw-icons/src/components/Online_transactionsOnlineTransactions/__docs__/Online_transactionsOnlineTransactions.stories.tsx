import type { Meta, StoryObj } from "@storybook/react";
import Online_transactionsOnlineTransactions from "../Online_transactionsOnlineTransactions";

const meta: Meta<typeof Online_transactionsOnlineTransactions> = { title: "unDraw/Online_transactionsOnlineTransactions", component: Online_transactionsOnlineTransactions };

export default meta;
type Story = StoryObj<typeof Online_transactionsOnlineTransactions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
