import type { Meta, StoryObj } from "@storybook/react";
import MobileAnalytics from "../MobileAnalytics";

const meta: Meta<typeof MobileAnalytics> = { title: "unDraw/MobileAnalytics", component: MobileAnalytics };

export default meta;
type Story = StoryObj<typeof MobileAnalytics>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
