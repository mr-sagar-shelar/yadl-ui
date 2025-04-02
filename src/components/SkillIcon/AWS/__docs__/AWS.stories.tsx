import type { Meta, StoryObj } from "@storybook/react";
import AWS from "../AWS";

const meta: Meta<typeof AWS> = { title: "SkillIcon/AWS", component: AWS };

export default meta;
type Story = StoryObj<typeof AWS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
