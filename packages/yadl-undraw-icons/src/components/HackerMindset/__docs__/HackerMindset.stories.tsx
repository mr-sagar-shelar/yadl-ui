import type { Meta, StoryObj } from "@storybook/react";
import HackerMindset from "../HackerMindset";

const meta: Meta<typeof HackerMindset> = { title: "unDraw/HackerMindset", component: HackerMindset };

export default meta;
type Story = StoryObj<typeof HackerMindset>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
