import type { Meta, StoryObj } from "@storybook/react";
import React from "../React";

const meta: Meta<typeof React> = { title: "SkillIcon/React", component: React };

export default meta;
type Story = StoryObj<typeof React>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
