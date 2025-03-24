import type { Meta, StoryObj } from "@storybook/react";
import RemoteDesignTeam from "../RemoteDesignTeam";

const meta: Meta<typeof RemoteDesignTeam> = { title: "unDraw/RemoteDesignTeam", component: RemoteDesignTeam };

export default meta;
type Story = StoryObj<typeof RemoteDesignTeam>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
