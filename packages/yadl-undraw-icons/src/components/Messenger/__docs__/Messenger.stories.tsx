import type { Meta, StoryObj } from "@storybook/react";
import Messenger from "../Messenger";

const meta: Meta<typeof Messenger> = { title: "unDraw/Messenger", component: Messenger };

export default meta;
type Story = StoryObj<typeof Messenger>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
