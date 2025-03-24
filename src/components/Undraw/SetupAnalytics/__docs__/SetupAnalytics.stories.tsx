import type { Meta, StoryObj } from "@storybook/react";
import SetupAnalytics from "../SetupAnalytics";

const meta: Meta<typeof SetupAnalytics> = { title: "unDraw/SetupAnalytics", component: SetupAnalytics };

export default meta;
type Story = StoryObj<typeof SetupAnalytics>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
