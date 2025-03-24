import type { Meta, StoryObj } from "@storybook/react";
import Godot from "../Godot";

const meta: Meta<typeof Godot> = { title: "SkillSet/Godot", component: Godot };

export default meta;
type Story = StoryObj<typeof Godot>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
