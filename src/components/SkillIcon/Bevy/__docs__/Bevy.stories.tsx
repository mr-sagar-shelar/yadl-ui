import type { Meta, StoryObj } from "@storybook/react";
import Bevy from "../Bevy";

const meta: Meta<typeof Bevy> = { title: "SkillIcon/Bevy", component: Bevy };

export default meta;
type Story = StoryObj<typeof Bevy>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
