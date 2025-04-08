import type { Meta, StoryObj } from "@storybook/react";
import AutomlVideoIntelligence from "../AutomlVideoIntelligence";

const meta: Meta<typeof AutomlVideoIntelligence> = { title: "GCP/AutomlVideoIntelligence", component: AutomlVideoIntelligence };

export default meta;
type Story = StoryObj<typeof AutomlVideoIntelligence>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
