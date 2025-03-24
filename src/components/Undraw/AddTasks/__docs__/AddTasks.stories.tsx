import type { Meta, StoryObj } from "@storybook/react";
import AddTasks from "../AddTasks";

const meta: Meta<typeof AddTasks> = { title: "unDraw/AddTasks", component: AddTasks };

export default meta;
type Story = StoryObj<typeof AddTasks>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
