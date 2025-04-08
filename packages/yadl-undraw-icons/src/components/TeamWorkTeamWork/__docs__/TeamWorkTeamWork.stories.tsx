import type { Meta, StoryObj } from "@storybook/react";
import TeamWorkTeamWork from "../TeamWorkTeamWork";

const meta: Meta<typeof TeamWorkTeamWork> = { title: "unDraw/TeamWorkTeamWork", component: TeamWorkTeamWork };

export default meta;
type Story = StoryObj<typeof TeamWorkTeamWork>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
