import type { Meta, StoryObj } from "@storybook/react";
import RealworldInsights from "../RealworldInsights";

const meta: Meta<typeof RealworldInsights> = { title: "GCP/RealworldInsights", component: RealworldInsights };

export default meta;
type Story = StoryObj<typeof RealworldInsights>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
