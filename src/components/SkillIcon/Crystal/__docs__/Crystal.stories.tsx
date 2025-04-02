import type { Meta, StoryObj } from "@storybook/react";
import Crystal from "../Crystal";

const meta: Meta<typeof Crystal> = { title: "SkillIcon/Crystal", component: Crystal };

export default meta;
type Story = StoryObj<typeof Crystal>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
