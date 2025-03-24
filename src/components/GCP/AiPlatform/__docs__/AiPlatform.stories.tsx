import type { Meta, StoryObj } from "@storybook/react";
import AiPlatform from "../AiPlatform";

const meta: Meta<typeof AiPlatform> = { title: "GCP/AiPlatform", component: AiPlatform };

export default meta;
type Story = StoryObj<typeof AiPlatform>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
