import type { Meta, StoryObj } from "@storybook/react";
import Obsidian from "../Obsidian";

const meta: Meta<typeof Obsidian> = { title: "SkillIcon/Obsidian", component: Obsidian };

export default meta;
type Story = StoryObj<typeof Obsidian>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
