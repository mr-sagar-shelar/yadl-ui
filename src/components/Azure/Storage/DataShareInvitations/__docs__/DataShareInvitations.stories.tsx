import type { Meta, StoryObj } from "@storybook/react";
import DataShareInvitations from "../DataShareInvitations";

const meta: Meta<typeof DataShareInvitations> = { title: "Azure/Storage/DataShareInvitations", component: DataShareInvitations };

export default meta;
type Story = StoryObj<typeof DataShareInvitations>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
