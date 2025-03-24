import type { Meta, StoryObj } from "@storybook/react";
import AiPlatformUnified from "../AiPlatformUnified";

const meta: Meta<typeof AiPlatformUnified> = { title: "GCP/AiPlatformUnified", component: AiPlatformUnified };

export default meta;
type Story = StoryObj<typeof AiPlatformUnified>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
