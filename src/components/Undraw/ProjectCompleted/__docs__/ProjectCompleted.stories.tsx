import type { Meta, StoryObj } from "@storybook/react";
import ProjectCompleted from "../ProjectCompleted";

const meta: Meta<typeof ProjectCompleted> = { title: "unDraw/ProjectCompleted", component: ProjectCompleted };

export default meta;
type Story = StoryObj<typeof ProjectCompleted>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
