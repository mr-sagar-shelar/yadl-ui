import type { Meta, StoryObj } from "@storybook/react";
import Waiting_for_youWaitingForYou from "../Waiting_for_youWaitingForYou";

const meta: Meta<typeof Waiting_for_youWaitingForYou> = { title: "unDraw/Waiting_for_youWaitingForYou", component: Waiting_for_youWaitingForYou };

export default meta;
type Story = StoryObj<typeof Waiting_for_youWaitingForYou>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
