import type { Meta, StoryObj } from "@storybook/react";
import ActivityPub from "../ActivityPub";

const meta: Meta<typeof ActivityPub> = { title: "SkillIcon/ActivityPub", component: ActivityPub };

export default meta;
type Story = StoryObj<typeof ActivityPub>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
