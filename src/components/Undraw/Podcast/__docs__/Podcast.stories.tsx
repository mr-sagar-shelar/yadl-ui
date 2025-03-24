import type { Meta, StoryObj } from "@storybook/react";
import Podcast from "../Podcast";

const meta: Meta<typeof Podcast> = { title: "unDraw/Podcast", component: Podcast };

export default meta;
type Story = StoryObj<typeof Podcast>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
