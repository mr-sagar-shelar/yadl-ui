import type { Meta, StoryObj } from "@storybook/react";
import ConnectingTeams from "../ConnectingTeams";

const meta: Meta<typeof ConnectingTeams> = { title: "unDraw/ConnectingTeams", component: ConnectingTeams };

export default meta;
type Story = StoryObj<typeof ConnectingTeams>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
