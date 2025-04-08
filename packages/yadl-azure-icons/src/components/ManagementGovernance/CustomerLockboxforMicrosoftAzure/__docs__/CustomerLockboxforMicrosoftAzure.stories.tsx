import type { Meta, StoryObj } from "@storybook/react";
import CustomerLockboxforMicrosoftAzure from "../CustomerLockboxforMicrosoftAzure";

const meta: Meta<typeof CustomerLockboxforMicrosoftAzure> = { title: "Azure/ManagementGovernance/CustomerLockboxforMicrosoftAzure", component: CustomerLockboxforMicrosoftAzure };

export default meta;
type Story = StoryObj<typeof CustomerLockboxforMicrosoftAzure>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
