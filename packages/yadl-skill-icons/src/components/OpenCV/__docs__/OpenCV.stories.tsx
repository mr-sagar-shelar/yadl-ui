import type { Meta, StoryObj } from "@storybook/react";
import OpenCV from "../OpenCV";

const meta: Meta<typeof OpenCV> = { title: "SkillIcon/OpenCV", component: OpenCV };

export default meta;
type Story = StoryObj<typeof OpenCV>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
