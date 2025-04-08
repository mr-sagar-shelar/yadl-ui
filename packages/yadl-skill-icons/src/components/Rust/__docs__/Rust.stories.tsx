import type { Meta, StoryObj } from "@storybook/react";
import Rust from "../Rust";

const meta: Meta<typeof Rust> = { title: "SkillIcon/Rust", component: Rust };

export default meta;
type Story = StoryObj<typeof Rust>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
