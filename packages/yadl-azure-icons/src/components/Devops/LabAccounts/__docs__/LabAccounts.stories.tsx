import type { Meta, StoryObj } from "@storybook/react";
import LabAccounts from "../LabAccounts";

const meta: Meta<typeof LabAccounts> = { title: "Azure/Devops/LabAccounts", component: LabAccounts };

export default meta;
type Story = StoryObj<typeof LabAccounts>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
