import type { Meta, StoryObj } from "@storybook/react";
import CandidateCandidate from "../CandidateCandidate";

const meta: Meta<typeof CandidateCandidate> = { title: "unDraw/CandidateCandidate", component: CandidateCandidate };

export default meta;
type Story = StoryObj<typeof CandidateCandidate>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
