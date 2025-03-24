import type { Meta, StoryObj } from "@storybook/react";
import TaskList from "../TaskList";

const meta: Meta<typeof TaskList> = { title: "unDraw/TaskList", component: TaskList };

export default meta;
type Story = StoryObj<typeof TaskList>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
