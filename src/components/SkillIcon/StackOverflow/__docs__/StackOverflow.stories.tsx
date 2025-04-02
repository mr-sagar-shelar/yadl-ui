import type { Meta, StoryObj } from "@storybook/react";
import StackOverflow from "../StackOverflow";

const meta: Meta<typeof StackOverflow> = { title: "SkillIcon/StackOverflow", component: StackOverflow };

export default meta;
type Story = StoryObj<typeof StackOverflow>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
