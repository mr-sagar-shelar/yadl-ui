import type { Meta, StoryObj } from "@storybook/react";
import AppSpace from "../AppSpace";

const meta: Meta<typeof AppSpace> = { title: "Azure/Web/AppSpace", component: AppSpace };

export default meta;
type Story = StoryObj<typeof AppSpace>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
