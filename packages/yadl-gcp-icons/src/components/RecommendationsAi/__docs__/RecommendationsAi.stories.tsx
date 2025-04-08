import type { Meta, StoryObj } from "@storybook/react";
import RecommendationsAi from "../RecommendationsAi";

const meta: Meta<typeof RecommendationsAi> = { title: "GCP/RecommendationsAi", component: RecommendationsAi };

export default meta;
type Story = StoryObj<typeof RecommendationsAi>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
