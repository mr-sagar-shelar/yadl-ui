import type { Meta, StoryObj } from "@storybook/react";
import LaunchPortal from "../LaunchPortal";

const meta: Meta<typeof LaunchPortal> = { title: "Azure/General/LaunchPortal", component: LaunchPortal };

export default meta;
type Story = StoryObj<typeof LaunchPortal>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
