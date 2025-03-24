import type { Meta, StoryObj } from "@storybook/react";
import RemoteRendering from "../RemoteRendering";

const meta: Meta<typeof RemoteRendering> = { title: "Azure/MixedReality/RemoteRendering", component: RemoteRendering };

export default meta;
type Story = StoryObj<typeof RemoteRendering>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
