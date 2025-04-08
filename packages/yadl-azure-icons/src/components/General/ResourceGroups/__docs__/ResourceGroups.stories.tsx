import type { Meta, StoryObj } from "@storybook/react";
import ResourceGroups from "../ResourceGroups";

const meta: Meta<typeof ResourceGroups> = { title: "Azure/General/ResourceGroups", component: ResourceGroups };

export default meta;
type Story = StoryObj<typeof ResourceGroups>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
