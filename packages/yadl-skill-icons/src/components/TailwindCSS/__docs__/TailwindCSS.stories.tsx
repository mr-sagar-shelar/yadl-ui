import type { Meta, StoryObj } from "@storybook/react";
import TailwindCSS from "../TailwindCSS";

const meta: Meta<typeof TailwindCSS> = { title: "SkillIcon/TailwindCSS", component: TailwindCSS };

export default meta;
type Story = StoryObj<typeof TailwindCSS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
