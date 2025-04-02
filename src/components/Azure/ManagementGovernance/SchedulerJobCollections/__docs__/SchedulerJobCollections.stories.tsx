import type { Meta, StoryObj } from "@storybook/react";
import SchedulerJobCollections from "../SchedulerJobCollections";

const meta: Meta<typeof SchedulerJobCollections> = { title: "Azure/ManagementGovernance/SchedulerJobCollections", component: SchedulerJobCollections };

export default meta;
type Story = StoryObj<typeof SchedulerJobCollections>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
