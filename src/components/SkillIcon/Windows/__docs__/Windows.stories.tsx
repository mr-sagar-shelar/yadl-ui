import type { Meta, StoryObj } from "@storybook/react";
import Windows from "../Windows";

const meta: Meta<typeof Windows> = { title: "SkillIcon/Windows", component: Windows };

export default meta;
type Story = StoryObj<typeof Windows>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
