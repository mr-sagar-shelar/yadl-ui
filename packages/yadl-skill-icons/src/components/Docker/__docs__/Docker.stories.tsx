import type { Meta, StoryObj } from "@storybook/react";
import Docker from "../Docker";

const meta: Meta<typeof Docker> = { title: "SkillIcon/Docker", component: Docker };

export default meta;
type Story = StoryObj<typeof Docker>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
