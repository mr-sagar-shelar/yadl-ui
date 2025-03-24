import type { Meta, StoryObj } from "@storybook/react";
import AnalyticsHub from "../AnalyticsHub";

const meta: Meta<typeof AnalyticsHub> = { title: "GCP/AnalyticsHub", component: AnalyticsHub };

export default meta;
type Story = StoryObj<typeof AnalyticsHub>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
