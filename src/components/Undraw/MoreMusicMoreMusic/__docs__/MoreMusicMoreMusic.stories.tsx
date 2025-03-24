import type { Meta, StoryObj } from "@storybook/react";
import MoreMusicMoreMusic from "../MoreMusicMoreMusic";

const meta: Meta<typeof MoreMusicMoreMusic> = { title: "unDraw/MoreMusicMoreMusic", component: MoreMusicMoreMusic };

export default meta;
type Story = StoryObj<typeof MoreMusicMoreMusic>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
