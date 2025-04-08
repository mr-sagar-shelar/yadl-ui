import type { Meta, StoryObj } from "@storybook/react";
import Invite from "../Invite";

const meta: Meta<typeof Invite> = { title: "unDraw/Invite", component: Invite };

export default meta;
type Story = StoryObj<typeof Invite>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
