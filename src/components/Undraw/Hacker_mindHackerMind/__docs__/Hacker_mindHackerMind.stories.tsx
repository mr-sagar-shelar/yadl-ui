import type { Meta, StoryObj } from "@storybook/react";
import Hacker_mindHackerMind from "../Hacker_mindHackerMind";

const meta: Meta<typeof Hacker_mindHackerMind> = { title: "unDraw/Hacker_mindHackerMind", component: Hacker_mindHackerMind };

export default meta;
type Story = StoryObj<typeof Hacker_mindHackerMind>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
