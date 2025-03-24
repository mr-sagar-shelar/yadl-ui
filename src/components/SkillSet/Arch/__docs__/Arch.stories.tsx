import type { Meta, StoryObj } from "@storybook/react";
import Arch from "../Arch";

const meta: Meta<typeof Arch> = { title: "SkillSet/Arch", component: Arch };

export default meta;
type Story = StoryObj<typeof Arch>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
