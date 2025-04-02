import type { Meta, StoryObj } from "@storybook/react";
import Linux from "../Linux";

const meta: Meta<typeof Linux> = { title: "SkillIcon/Linux", component: Linux };

export default meta;
type Story = StoryObj<typeof Linux>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
