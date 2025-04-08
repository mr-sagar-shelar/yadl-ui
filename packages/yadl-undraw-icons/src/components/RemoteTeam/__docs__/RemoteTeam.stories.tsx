import type { Meta, StoryObj } from "@storybook/react";
import RemoteTeam from "../RemoteTeam";

const meta: Meta<typeof RemoteTeam> = { title: "unDraw/RemoteTeam", component: RemoteTeam };

export default meta;
type Story = StoryObj<typeof RemoteTeam>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
