import type { Meta, StoryObj } from "@storybook/react";
import Mailbox from "../Mailbox";

const meta: Meta<typeof Mailbox> = { title: "unDraw/Mailbox", component: Mailbox };

export default meta;
type Story = StoryObj<typeof Mailbox>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
