import type { Meta, StoryObj } from "@storybook/react";
import Vitest from "../Vitest";

const meta: Meta<typeof Vitest> = { title: "SkillIcon/Vitest", component: Vitest };

export default meta;
type Story = StoryObj<typeof Vitest>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
