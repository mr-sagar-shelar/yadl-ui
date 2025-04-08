import type { Meta, StoryObj } from "@storybook/react";
import ConnectedWorldConnectedWorld from "../ConnectedWorldConnectedWorld";

const meta: Meta<typeof ConnectedWorldConnectedWorld> = { title: "unDraw/ConnectedWorldConnectedWorld", component: ConnectedWorldConnectedWorld };

export default meta;
type Story = StoryObj<typeof ConnectedWorldConnectedWorld>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
