import type { Meta, StoryObj } from "@storybook/react";
import Less from "../Less";

const meta: Meta<typeof Less> = { title: "SkillSet/Less", component: Less };

export default meta;
type Story = StoryObj<typeof Less>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
