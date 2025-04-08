import type { Meta, StoryObj } from "@storybook/react";
import Users from "../Users";

const meta: Meta<typeof Users> = { title: "Azure/Identity/Users", component: Users };

export default meta;
type Story = StoryObj<typeof Users>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
