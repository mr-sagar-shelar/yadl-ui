import type { Meta, StoryObj } from "@storybook/react";
import GithubActions from "../GithubActions";

const meta: Meta<typeof GithubActions> = { title: "SkillSet/GithubActions", component: GithubActions };

export default meta;
type Story = StoryObj<typeof GithubActions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
