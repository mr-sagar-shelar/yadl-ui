import type { Meta, StoryObj } from "@storybook/react";
import UserPrivacy from "../UserPrivacy";

const meta: Meta<typeof UserPrivacy> = { title: "Azure/ManagementGovernance/UserPrivacy", component: UserPrivacy };

export default meta;
type Story = StoryObj<typeof UserPrivacy>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
