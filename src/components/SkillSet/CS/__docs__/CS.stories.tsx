import type { Meta, StoryObj } from "@storybook/react";
import CS from "../CS";

const meta: Meta<typeof CS> = { title: "SkillSet/CS", component: CS };

export default meta;
type Story = StoryObj<typeof CS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
