import type { Meta, StoryObj } from "@storybook/react";
import MyCustomers from "../MyCustomers";

const meta: Meta<typeof MyCustomers> = { title: "Azure/ManagementGovernance/MyCustomers", component: MyCustomers };

export default meta;
type Story = StoryObj<typeof MyCustomers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
