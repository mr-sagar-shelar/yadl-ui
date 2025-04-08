import type { Meta, StoryObj } from "@storybook/react";
import Grades from "../Grades";

const meta: Meta<typeof Grades> = { title: "unDraw/Grades", component: Grades };

export default meta;
type Story = StoryObj<typeof Grades>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
