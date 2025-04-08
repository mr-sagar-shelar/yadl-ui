import type { Meta, StoryObj } from "@storybook/react";
import HostGroups from "../HostGroups";

const meta: Meta<typeof HostGroups> = { title: "Azure/Compute/HostGroups", component: HostGroups };

export default meta;
type Story = StoryObj<typeof HostGroups>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
