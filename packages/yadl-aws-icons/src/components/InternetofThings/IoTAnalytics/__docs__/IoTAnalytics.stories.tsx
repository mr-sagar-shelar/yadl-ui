import type { Meta, StoryObj } from "@storybook/react";
import IoTAnalytics from "../IoTAnalytics";

const meta: Meta<typeof IoTAnalytics> = { title: "AWS/InternetofThings/IoTAnalytics", component: IoTAnalytics };

export default meta;
type Story = StoryObj<typeof IoTAnalytics>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
