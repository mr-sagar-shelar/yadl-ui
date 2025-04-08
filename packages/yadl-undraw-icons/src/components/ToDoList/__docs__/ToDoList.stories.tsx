import type { Meta, StoryObj } from "@storybook/react";
import ToDoList from "../ToDoList";

const meta: Meta<typeof ToDoList> = { title: "unDraw/ToDoList", component: ToDoList };

export default meta;
type Story = StoryObj<typeof ToDoList>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
