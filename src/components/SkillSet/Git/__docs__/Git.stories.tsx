import type { Meta, StoryObj } from "@storybook/react";
import Git from "../Git";

const meta: Meta<typeof Git> = { title: "SkillSet/Git", component: Git };

export default meta;
type Story = StoryObj<typeof Git>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
