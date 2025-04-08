import type { Meta, StoryObj } from "@storybook/react";
import Music from "../Music";

const meta: Meta<typeof Music> = { title: "unDraw/Music", component: Music };

export default meta;
type Story = StoryObj<typeof Music>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
