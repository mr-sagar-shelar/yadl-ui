import type { Meta, StoryObj } from "@storybook/react";
import Bun from "../Bun";

const meta: Meta<typeof Bun> = { title: "SkillIcon/Bun", component: Bun };

export default meta;
type Story = StoryObj<typeof Bun>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
