import type { Meta, StoryObj } from "@storybook/react";
import Atom from "../Atom";

const meta: Meta<typeof Atom> = { title: "SkillSet/Atom", component: Atom };

export default meta;
type Story = StoryObj<typeof Atom>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
