import type { Meta, StoryObj } from "@storybook/react";
import CMake from "../CMake";

const meta: Meta<typeof CMake> = { title: "SkillSet/CMake", component: CMake };

export default meta;
type Story = StoryObj<typeof CMake>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
