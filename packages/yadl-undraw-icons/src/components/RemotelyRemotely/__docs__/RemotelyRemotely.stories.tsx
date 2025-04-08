import type { Meta, StoryObj } from "@storybook/react";
import RemotelyRemotely from "../RemotelyRemotely";

const meta: Meta<typeof RemotelyRemotely> = { title: "unDraw/RemotelyRemotely", component: RemotelyRemotely };

export default meta;
type Story = StoryObj<typeof RemotelyRemotely>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
