import type { Meta, StoryObj } from "@storybook/react";
import Ubuntu from "../Ubuntu";

const meta: Meta<typeof Ubuntu> = { title: "SkillIcon/Ubuntu", component: Ubuntu };

export default meta;
type Story = StoryObj<typeof Ubuntu>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
