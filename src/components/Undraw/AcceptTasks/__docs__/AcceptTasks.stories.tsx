import type { Meta, StoryObj } from "@storybook/react";
import AcceptTasks from "../AcceptTasks";

const meta: Meta<typeof AcceptTasks> = { title: "unDraw/AcceptTasks", component: AcceptTasks };

export default meta;
type Story = StoryObj<typeof AcceptTasks>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
