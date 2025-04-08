import type { Meta, StoryObj } from "@storybook/react";
import PyTorch from "../PyTorch";

const meta: Meta<typeof PyTorch> = { title: "SkillIcon/PyTorch", component: PyTorch };

export default meta;
type Story = StoryObj<typeof PyTorch>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
