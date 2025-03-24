import type { Meta, StoryObj } from "@storybook/react";
import TransferFiles from "../TransferFiles";

const meta: Meta<typeof TransferFiles> = { title: "unDraw/TransferFiles", component: TransferFiles };

export default meta;
type Story = StoryObj<typeof TransferFiles>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
