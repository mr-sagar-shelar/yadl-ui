import type { Meta, StoryObj } from "@storybook/react";
import BusinessAnalytics from "../BusinessAnalytics";

const meta: Meta<typeof BusinessAnalytics> = { title: "unDraw/BusinessAnalytics", component: BusinessAnalytics };

export default meta;
type Story = StoryObj<typeof BusinessAnalytics>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
