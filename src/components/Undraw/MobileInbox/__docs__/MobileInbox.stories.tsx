import type { Meta, StoryObj } from "@storybook/react";
import MobileInbox from "../MobileInbox";

const meta: Meta<typeof MobileInbox> = { title: "unDraw/MobileInbox", component: MobileInbox };

export default meta;
type Story = StoryObj<typeof MobileInbox>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
