import type { Meta, StoryObj } from "@storybook/react";
import AutomanagedVM from "../AutomanagedVM";

const meta: Meta<typeof AutomanagedVM> = { title: "Azure/Compute/AutomanagedVM", component: AutomanagedVM };

export default meta;
type Story = StoryObj<typeof AutomanagedVM>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
