import type { Meta, StoryObj } from "@storybook/react";
import PullRequest from "../PullRequest";

const meta: Meta<typeof PullRequest> = { title: "unDraw/PullRequest", component: PullRequest };

export default meta;
type Story = StoryObj<typeof PullRequest>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
