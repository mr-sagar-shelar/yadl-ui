import type { Meta, StoryObj } from "@storybook/react";
import Github from "../Github";

const meta: Meta<typeof Github> = { title: "SkillIcon/Github", component: Github };

export default meta;
type Story = StoryObj<typeof Github>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
