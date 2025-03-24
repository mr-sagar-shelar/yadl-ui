import type { Meta, StoryObj } from "@storybook/react";
import QuickSight from "../QuickSight";

const meta: Meta<typeof QuickSight> = { title: "AWS/Analytics/QuickSight", component: QuickSight };

export default meta;
type Story = StoryObj<typeof QuickSight>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
