import type { Meta, StoryObj } from "@storybook/react";
import KinesisDataAnalytics from "../KinesisDataAnalytics";

const meta: Meta<typeof KinesisDataAnalytics> = { title: "AWS/Analytics/KinesisDataAnalytics", component: KinesisDataAnalytics };

export default meta;
type Story = StoryObj<typeof KinesisDataAnalytics>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
