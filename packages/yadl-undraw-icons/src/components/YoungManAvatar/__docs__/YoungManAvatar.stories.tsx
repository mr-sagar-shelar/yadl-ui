import type { Meta, StoryObj } from "@storybook/react";
import YoungManAvatar from "../YoungManAvatar";

const meta: Meta<typeof YoungManAvatar> = { title: "unDraw/YoungManAvatar", component: YoungManAvatar };

export default meta;
type Story = StoryObj<typeof YoungManAvatar>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
