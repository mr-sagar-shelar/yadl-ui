import type { Meta, StoryObj } from "@storybook/react";
import AzureSentinel from "../AzureSentinel";

const meta: Meta<typeof AzureSentinel> = { title: "Azure/Security/AzureSentinel", component: AzureSentinel };

export default meta;
type Story = StoryObj<typeof AzureSentinel>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
