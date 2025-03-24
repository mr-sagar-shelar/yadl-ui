import type { Meta, StoryObj } from "@storybook/react";
import p5js from "../p5js";

const meta: Meta<typeof p5js> = { title: "SkillSet/p5js", component: p5js };

export default meta;
type Story = StoryObj<typeof p5js>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
