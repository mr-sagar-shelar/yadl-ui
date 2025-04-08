import type { Meta, StoryObj } from "@storybook/react";
import ActiveDirectoryConnectHealth from "../ActiveDirectoryConnectHealth";

const meta: Meta<typeof ActiveDirectoryConnectHealth> = { title: "Azure/Identity/ActiveDirectoryConnectHealth", component: ActiveDirectoryConnectHealth };

export default meta;
type Story = StoryObj<typeof ActiveDirectoryConnectHealth>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
