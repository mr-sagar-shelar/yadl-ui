import type { Meta, StoryObj } from "@storybook/react";
import CompletedTasks from "../CompletedTasks";

const meta: Meta<typeof CompletedTasks> = { title: "unDraw/CompletedTasks", component: CompletedTasks };

export default meta;
type Story = StoryObj<typeof CompletedTasks>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
