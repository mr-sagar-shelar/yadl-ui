import type { Meta, StoryObj } from "@storybook/react";
import Inbox from "../Inbox";

const meta: Meta<typeof Inbox> = { title: "unDraw/Inbox", component: Inbox };

export default meta;
type Story = StoryObj<typeof Inbox>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
