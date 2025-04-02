import type { Meta, StoryObj } from "@storybook/react";
import Figma from "../Figma";

const meta: Meta<typeof Figma> = { title: "SkillIcon/Figma", component: Figma };

export default meta;
type Story = StoryObj<typeof Figma>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
