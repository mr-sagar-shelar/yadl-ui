import type { Meta, StoryObj } from "@storybook/react";
import SignalR from "../SignalR";

const meta: Meta<typeof SignalR> = { title: "Azure/Web/SignalR", component: SignalR };

export default meta;
type Story = StoryObj<typeof SignalR>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
