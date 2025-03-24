import type { Meta, StoryObj } from "@storybook/react";
import Vercel from "../Vercel";

const meta: Meta<typeof Vercel> = { title: "SkillSet/Vercel", component: Vercel };

export default meta;
type Story = StoryObj<typeof Vercel>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
