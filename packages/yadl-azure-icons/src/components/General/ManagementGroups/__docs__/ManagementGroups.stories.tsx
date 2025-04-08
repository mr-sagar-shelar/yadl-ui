import type { Meta, StoryObj } from "@storybook/react";
import ManagementGroups from "../ManagementGroups";

const meta: Meta<typeof ManagementGroups> = { title: "Azure/General/ManagementGroups", component: ManagementGroups };

export default meta;
type Story = StoryObj<typeof ManagementGroups>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
