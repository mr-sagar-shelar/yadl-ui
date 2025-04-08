import type { Meta, StoryObj } from "@storybook/react";
import Mastodon from "../Mastodon";

const meta: Meta<typeof Mastodon> = { title: "SkillIcon/Mastodon", component: Mastodon };

export default meta;
type Story = StoryObj<typeof Mastodon>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
