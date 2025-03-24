import type { Meta, StoryObj } from "@storybook/react";
import LovingStory from "../LovingStory";

const meta: Meta<typeof LovingStory> = { title: "unDraw/LovingStory", component: LovingStory };

export default meta;
type Story = StoryObj<typeof LovingStory>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
