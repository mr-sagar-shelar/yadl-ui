import type { Meta, StoryObj } from "@storybook/react";
import TransferFamily from "../TransferFamily";

const meta: Meta<typeof TransferFamily> = { title: "AWS/MigrationTransfer/TransferFamily", component: TransferFamily };

export default meta;
type Story = StoryObj<typeof TransferFamily>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
