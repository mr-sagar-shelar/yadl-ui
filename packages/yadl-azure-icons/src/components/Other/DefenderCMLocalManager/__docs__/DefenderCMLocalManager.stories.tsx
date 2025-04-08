import type { Meta, StoryObj } from "@storybook/react";
import DefenderCMLocalManager from "../DefenderCMLocalManager";

const meta: Meta<typeof DefenderCMLocalManager> = { title: "Azure/Other/DefenderCMLocalManager", component: DefenderCMLocalManager };

export default meta;
type Story = StoryObj<typeof DefenderCMLocalManager>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
