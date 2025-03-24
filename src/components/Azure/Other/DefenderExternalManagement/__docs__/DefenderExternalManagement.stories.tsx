import type { Meta, StoryObj } from "@storybook/react";
import DefenderExternalManagement from "../DefenderExternalManagement";

const meta: Meta<typeof DefenderExternalManagement> = { title: "Azure/Other/DefenderExternalManagement", component: DefenderExternalManagement };

export default meta;
type Story = StoryObj<typeof DefenderExternalManagement>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
