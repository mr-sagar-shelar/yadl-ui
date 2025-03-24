import type { Meta, StoryObj } from "@storybook/react";
import Python from "../Python";

const meta: Meta<typeof Python> = { title: "SkillSet/Python", component: Python };

export default meta;
type Story = StoryObj<typeof Python>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
