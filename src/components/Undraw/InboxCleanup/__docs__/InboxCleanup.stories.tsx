import type { Meta, StoryObj } from "@storybook/react";
import InboxCleanup from "../InboxCleanup";

const meta: Meta<typeof InboxCleanup> = { title: "unDraw/InboxCleanup", component: InboxCleanup };

export default meta;
type Story = StoryObj<typeof InboxCleanup>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
