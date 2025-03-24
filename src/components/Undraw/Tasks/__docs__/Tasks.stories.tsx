import type { Meta, StoryObj } from "@storybook/react";
import Tasks from "../Tasks";

const meta: Meta<typeof Tasks> = { title: "unDraw/Tasks", component: Tasks };

export default meta;
type Story = StoryObj<typeof Tasks>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
