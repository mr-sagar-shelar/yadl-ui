import type { Meta, StoryObj } from "@storybook/react";
import MeetTheTeam from "../MeetTheTeam";

const meta: Meta<typeof MeetTheTeam> = { title: "unDraw/MeetTheTeam", component: MeetTheTeam };

export default meta;
type Story = StoryObj<typeof MeetTheTeam>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
