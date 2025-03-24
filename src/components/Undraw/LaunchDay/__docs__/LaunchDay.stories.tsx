import type { Meta, StoryObj } from "@storybook/react";
import LaunchDay from "../LaunchDay";

const meta: Meta<typeof LaunchDay> = { title: "unDraw/LaunchDay", component: LaunchDay };

export default meta;
type Story = StoryObj<typeof LaunchDay>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
