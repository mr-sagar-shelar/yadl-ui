import type { Meta, StoryObj } from "@storybook/react";
import Task from "../Task";

const meta: Meta<typeof Task> = { title: "unDraw/Task", component: Task };

export default meta;
type Story = StoryObj<typeof Task>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
