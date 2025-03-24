import type { Meta, StoryObj } from "@storybook/react";
import Messages from "../Messages";

const meta: Meta<typeof Messages> = { title: "unDraw/Messages", component: Messages };

export default meta;
type Story = StoryObj<typeof Messages>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
