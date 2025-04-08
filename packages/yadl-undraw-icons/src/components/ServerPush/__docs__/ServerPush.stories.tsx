import type { Meta, StoryObj } from "@storybook/react";
import ServerPush from "../ServerPush";

const meta: Meta<typeof ServerPush> = { title: "unDraw/ServerPush", component: ServerPush };

export default meta;
type Story = StoryObj<typeof ServerPush>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
