import type { Meta, StoryObj } from "@storybook/react";
import CompleteTask from "../CompleteTask";

const meta: Meta<typeof CompleteTask> = { title: "unDraw/CompleteTask", component: CompleteTask };

export default meta;
type Story = StoryObj<typeof CompleteTask>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
