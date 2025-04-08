import type { Meta, StoryObj } from "@storybook/react";
import TeamGoals from "../TeamGoals";

const meta: Meta<typeof TeamGoals> = { title: "unDraw/TeamGoals", component: TeamGoals };

export default meta;
type Story = StoryObj<typeof TeamGoals>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
