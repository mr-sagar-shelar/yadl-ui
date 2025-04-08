import type { Meta, StoryObj } from "@storybook/react";
import GameServers from "../GameServers";

const meta: Meta<typeof GameServers> = { title: "GCP/GameServers", component: GameServers };

export default meta;
type Story = StoryObj<typeof GameServers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
