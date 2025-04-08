import type { Meta, StoryObj } from "@storybook/react";
import ProjectTeam from "../ProjectTeam";

const meta: Meta<typeof ProjectTeam> = { title: "unDraw/ProjectTeam", component: ProjectTeam };

export default meta;
type Story = StoryObj<typeof ProjectTeam>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
