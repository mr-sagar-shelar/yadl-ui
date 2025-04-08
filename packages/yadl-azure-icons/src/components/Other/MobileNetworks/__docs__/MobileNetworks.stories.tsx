import type { Meta, StoryObj } from "@storybook/react";
import MobileNetworks from "../MobileNetworks";

const meta: Meta<typeof MobileNetworks> = { title: "Azure/Other/MobileNetworks", component: MobileNetworks };

export default meta;
type Story = StoryObj<typeof MobileNetworks>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
