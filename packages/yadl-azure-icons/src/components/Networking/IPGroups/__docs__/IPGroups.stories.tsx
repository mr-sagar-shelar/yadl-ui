import type { Meta, StoryObj } from "@storybook/react";
import IPGroups from "../IPGroups";

const meta: Meta<typeof IPGroups> = { title: "Azure/Networking/IPGroups", component: IPGroups };

export default meta;
type Story = StoryObj<typeof IPGroups>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
