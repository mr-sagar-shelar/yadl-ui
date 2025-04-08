import type { Meta, StoryObj } from "@storybook/react";
import MobileFeed from "../MobileFeed";

const meta: Meta<typeof MobileFeed> = { title: "unDraw/MobileFeed", component: MobileFeed };

export default meta;
type Story = StoryObj<typeof MobileFeed>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
