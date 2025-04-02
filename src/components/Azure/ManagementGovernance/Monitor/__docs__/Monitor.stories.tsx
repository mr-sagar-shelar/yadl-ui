import type { Meta, StoryObj } from "@storybook/react";
import Monitor from "../Monitor";

const meta: Meta<typeof Monitor> = { title: "Azure/ManagementGovernance/Monitor", component: Monitor };

export default meta;
type Story = StoryObj<typeof Monitor>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
