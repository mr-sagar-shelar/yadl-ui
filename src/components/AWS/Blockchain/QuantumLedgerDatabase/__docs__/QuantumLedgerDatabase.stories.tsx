import type { Meta, StoryObj } from "@storybook/react";
import QuantumLedgerDatabase from "../QuantumLedgerDatabase";

const meta: Meta<typeof QuantumLedgerDatabase> = { title: "AWS/Blockchain/QuantumLedgerDatabase", component: QuantumLedgerDatabase };

export default meta;
type Story = StoryObj<typeof QuantumLedgerDatabase>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
