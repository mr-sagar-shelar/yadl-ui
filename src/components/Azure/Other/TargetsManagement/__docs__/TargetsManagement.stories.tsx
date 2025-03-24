import type { Meta, StoryObj } from "@storybook/react";
import TargetsManagement from "../TargetsManagement";

const meta: Meta<typeof TargetsManagement> = { title: "Azure/Other/TargetsManagement", component: TargetsManagement };

export default meta;
type Story = StoryObj<typeof TargetsManagement>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
