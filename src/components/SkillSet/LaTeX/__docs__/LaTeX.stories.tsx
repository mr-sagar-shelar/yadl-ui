import type { Meta, StoryObj } from "@storybook/react";
import LaTeX from "../LaTeX";

const meta: Meta<typeof LaTeX> = { title: "SkillSet/LaTeX", component: LaTeX };

export default meta;
type Story = StoryObj<typeof LaTeX>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
