import type { Meta, StoryObj } from "@storybook/react";
import UpdateManagementCenter from "../UpdateManagementCenter";

const meta: Meta<typeof UpdateManagementCenter> = { title: "Azure/Other/UpdateManagementCenter", component: UpdateManagementCenter };

export default meta;
type Story = StoryObj<typeof UpdateManagementCenter>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
