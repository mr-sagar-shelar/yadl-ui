import type { Meta, StoryObj } from "@storybook/react";
import Sketchup from "../Sketchup";

const meta: Meta<typeof Sketchup> = { title: "SkillIcon/Sketchup", component: Sketchup };

export default meta;
type Story = StoryObj<typeof Sketchup>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
