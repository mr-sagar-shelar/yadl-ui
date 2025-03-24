import type { Meta, StoryObj } from "@storybook/react";
import Advisor from "../Advisor";

const meta: Meta<typeof Advisor> = { title: "Azure/ManagementGovernance/Advisor", component: Advisor };

export default meta;
type Story = StoryObj<typeof Advisor>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
