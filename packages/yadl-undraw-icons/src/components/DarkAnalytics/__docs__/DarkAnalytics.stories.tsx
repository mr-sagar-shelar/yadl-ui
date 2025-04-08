import type { Meta, StoryObj } from "@storybook/react";
import DarkAnalytics from "../DarkAnalytics";

const meta: Meta<typeof DarkAnalytics> = { title: "unDraw/DarkAnalytics", component: DarkAnalytics };

export default meta;
type Story = StoryObj<typeof DarkAnalytics>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
