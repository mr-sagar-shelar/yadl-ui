import type { Meta, StoryObj } from "@storybook/react";
import Dashboard from "../Dashboard";

const meta: Meta<typeof Dashboard> = { title: "unDraw/Dashboard", component: Dashboard };

export default meta;
type Story = StoryObj<typeof Dashboard>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
