import type { Meta, StoryObj } from "@storybook/react";
import DashboardHub from "../DashboardHub";

const meta: Meta<typeof DashboardHub> = { title: "Azure/Other/DashboardHub", component: DashboardHub };

export default meta;
type Story = StoryObj<typeof DashboardHub>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
