import type { Meta, StoryObj } from "@storybook/react";
import VideoIntelligenceApi from "../VideoIntelligenceApi";

const meta: Meta<typeof VideoIntelligenceApi> = { title: "GCP/VideoIntelligenceApi", component: VideoIntelligenceApi };

export default meta;
type Story = StoryObj<typeof VideoIntelligenceApi>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
