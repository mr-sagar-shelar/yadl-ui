import type { Meta, StoryObj } from "@storybook/react";
import ChimeSDK from "../ChimeSDK";

const meta: Meta<typeof ChimeSDK> = { title: "AWS/BusinessApplications/ChimeSDK", component: ChimeSDK };

export default meta;
type Story = StoryObj<typeof ChimeSDK>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
