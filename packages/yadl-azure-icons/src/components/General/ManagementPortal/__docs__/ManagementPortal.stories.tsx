import type { Meta, StoryObj } from "@storybook/react";
import ManagementPortal from "../ManagementPortal";

const meta: Meta<typeof ManagementPortal> = { title: "Azure/General/ManagementPortal", component: ManagementPortal };

export default meta;
type Story = StoryObj<typeof ManagementPortal>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
