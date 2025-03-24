import type { Meta, StoryObj } from "@storybook/react";
import VIM from "../VIM";

const meta: Meta<typeof VIM> = { title: "SkillSet/VIM", component: VIM };

export default meta;
type Story = StoryObj<typeof VIM>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
