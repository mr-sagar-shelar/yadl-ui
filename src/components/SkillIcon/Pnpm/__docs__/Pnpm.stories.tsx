import type { Meta, StoryObj } from "@storybook/react";
import Pnpm from "../Pnpm";

const meta: Meta<typeof Pnpm> = { title: "SkillIcon/Pnpm", component: Pnpm };

export default meta;
type Story = StoryObj<typeof Pnpm>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
