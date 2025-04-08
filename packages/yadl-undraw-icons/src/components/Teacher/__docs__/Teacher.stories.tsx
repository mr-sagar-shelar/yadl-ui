import type { Meta, StoryObj } from "@storybook/react";
import Teacher from "../Teacher";

const meta: Meta<typeof Teacher> = { title: "unDraw/Teacher", component: Teacher };

export default meta;
type Story = StoryObj<typeof Teacher>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
