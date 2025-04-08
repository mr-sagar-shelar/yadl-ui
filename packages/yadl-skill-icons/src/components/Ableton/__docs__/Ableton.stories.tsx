import type { Meta, StoryObj } from "@storybook/react";
import Ableton from "../Ableton";

const meta: Meta<typeof Ableton> = { title: "SkillIcon/Ableton", component: Ableton };

export default meta;
type Story = StoryObj<typeof Ableton>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
