import type { Meta, StoryObj } from "@storybook/react";
import CodePen from "../CodePen";

const meta: Meta<typeof CodePen> = { title: "SkillSet/CodePen", component: CodePen };

export default meta;
type Story = StoryObj<typeof CodePen>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
