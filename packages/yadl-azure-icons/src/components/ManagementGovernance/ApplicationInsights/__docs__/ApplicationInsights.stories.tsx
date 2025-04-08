import type { Meta, StoryObj } from "@storybook/react";
import ApplicationInsights from "../ApplicationInsights";

const meta: Meta<typeof ApplicationInsights> = { title: "Azure/ManagementGovernance/ApplicationInsights", component: ApplicationInsights };

export default meta;
type Story = StoryObj<typeof ApplicationInsights>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
