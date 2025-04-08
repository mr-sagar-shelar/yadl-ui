import type { Meta, StoryObj } from "@storybook/react";
import TeamSpirit from "../TeamSpirit";

const meta: Meta<typeof TeamSpirit> = { title: "unDraw/TeamSpirit", component: TeamSpirit };

export default meta;
type Story = StoryObj<typeof TeamSpirit>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
