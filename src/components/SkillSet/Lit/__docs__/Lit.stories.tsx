import type { Meta, StoryObj } from "@storybook/react";
import Lit from "../Lit";

const meta: Meta<typeof Lit> = { title: "SkillSet/Lit", component: Lit };

export default meta;
type Story = StoryObj<typeof Lit>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
