import type { Meta, StoryObj } from "@storybook/react";
import ApiAnalytics from "../ApiAnalytics";

const meta: Meta<typeof ApiAnalytics> = { title: "GCP/ApiAnalytics", component: ApiAnalytics };

export default meta;
type Story = StoryObj<typeof ApiAnalytics>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
