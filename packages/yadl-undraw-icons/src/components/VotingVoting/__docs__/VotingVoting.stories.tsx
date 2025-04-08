import type { Meta, StoryObj } from "@storybook/react";
import VotingVoting from "../VotingVoting";

const meta: Meta<typeof VotingVoting> = { title: "unDraw/VotingVoting", component: VotingVoting };

export default meta;
type Story = StoryObj<typeof VotingVoting>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
