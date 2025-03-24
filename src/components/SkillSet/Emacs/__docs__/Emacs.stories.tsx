import type { Meta, StoryObj } from "@storybook/react";
import Emacs from "../Emacs";

const meta: Meta<typeof Emacs> = { title: "SkillSet/Emacs", component: Emacs };

export default meta;
type Story = StoryObj<typeof Emacs>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
