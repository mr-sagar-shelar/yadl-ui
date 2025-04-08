import type { Meta, StoryObj } from "@storybook/react";
import R from "../R";

const meta: Meta<typeof R> = { title: "SkillIcon/R", component: R };

export default meta;
type Story = StoryObj<typeof R>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
