import type { Meta, StoryObj } from "@storybook/react";
import EndpointAnalytics from "../EndpointAnalytics";

const meta: Meta<typeof EndpointAnalytics> = { title: "Azure/Analytics/EndpointAnalytics", component: EndpointAnalytics };

export default meta;
type Story = StoryObj<typeof EndpointAnalytics>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
