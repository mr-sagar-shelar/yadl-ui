import type { Meta, StoryObj } from "@storybook/react";
import NextTasks from "../NextTasks";

const meta: Meta<typeof NextTasks> = { title: "unDraw/NextTasks", component: NextTasks };

export default meta;
type Story = StoryObj<typeof NextTasks>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
