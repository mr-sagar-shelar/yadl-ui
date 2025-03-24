import type { Meta, StoryObj } from "@storybook/react";
import Blender from "../Blender";

const meta: Meta<typeof Blender> = { title: "SkillSet/Blender", component: Blender };

export default meta;
type Story = StoryObj<typeof Blender>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
