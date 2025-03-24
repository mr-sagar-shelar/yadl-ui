import type { Meta, StoryObj } from "@storybook/react";
import APIConnections from "../APIConnections";

const meta: Meta<typeof APIConnections> = { title: "Azure/Web/APIConnections", component: APIConnections };

export default meta;
type Story = StoryObj<typeof APIConnections>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
