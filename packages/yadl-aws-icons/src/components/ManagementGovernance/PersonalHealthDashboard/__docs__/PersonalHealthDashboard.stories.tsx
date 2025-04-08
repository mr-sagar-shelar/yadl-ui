import type { Meta, StoryObj } from "@storybook/react";
import PersonalHealthDashboard from "../PersonalHealthDashboard";

const meta: Meta<typeof PersonalHealthDashboard> = { title: "AWS/ManagementGovernance/PersonalHealthDashboard", component: PersonalHealthDashboard };

export default meta;
type Story = StoryObj<typeof PersonalHealthDashboard>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
