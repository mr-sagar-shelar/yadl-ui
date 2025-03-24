import type { Meta, StoryObj } from "@storybook/react";
import LocationTracking from "../LocationTracking";

const meta: Meta<typeof LocationTracking> = { title: "unDraw/LocationTracking", component: LocationTracking };

export default meta;
type Story = StoryObj<typeof LocationTracking>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
