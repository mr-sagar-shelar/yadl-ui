import type { Meta, StoryObj } from "@storybook/react";
import GitLab from "../GitLab";

const meta: Meta<typeof GitLab> = { title: "SkillSet/GitLab", component: GitLab };

export default meta;
type Story = StoryObj<typeof GitLab>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
