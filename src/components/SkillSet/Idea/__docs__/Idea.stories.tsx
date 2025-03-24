import type { Meta, StoryObj } from "@storybook/react";
import Idea from "../Idea";

const meta: Meta<typeof Idea> = { title: "SkillSet/Idea", component: Idea };

export default meta;
type Story = StoryObj<typeof Idea>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
