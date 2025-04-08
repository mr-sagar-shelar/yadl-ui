import type { Meta, StoryObj } from "@storybook/react";
import HappyAnnouncement from "../HappyAnnouncement";

const meta: Meta<typeof HappyAnnouncement> = { title: "unDraw/HappyAnnouncement", component: HappyAnnouncement };

export default meta;
type Story = StoryObj<typeof HappyAnnouncement>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
