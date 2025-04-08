import type { Meta, StoryObj } from "@storybook/react";
import Octave from "../Octave";

const meta: Meta<typeof Octave> = { title: "SkillIcon/Octave", component: Octave };

export default meta;
type Story = StoryObj<typeof Octave>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
