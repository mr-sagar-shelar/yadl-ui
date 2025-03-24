import type { Meta, StoryObj } from "@storybook/react";
import QuickChat from "../QuickChat";

const meta: Meta<typeof QuickChat> = { title: "unDraw/QuickChat", component: QuickChat };

export default meta;
type Story = StoryObj<typeof QuickChat>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
