import type { Meta, StoryObj } from "@storybook/react";
import Jenkins from "../Jenkins";

const meta: Meta<typeof Jenkins> = { title: "SkillIcon/Jenkins", component: Jenkins };

export default meta;
type Story = StoryObj<typeof Jenkins>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
