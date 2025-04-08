import type { Meta, StoryObj } from "@storybook/react";
import ManagedDevOpsPools from "../ManagedDevOpsPools";

const meta: Meta<typeof ManagedDevOpsPools> = { title: "Azure/Devops/ManagedDevOpsPools", component: ManagedDevOpsPools };

export default meta;
type Story = StoryObj<typeof ManagedDevOpsPools>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
