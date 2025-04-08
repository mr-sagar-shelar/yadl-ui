import type { Meta, StoryObj } from "@storybook/react";
import BusinessProcessTracking from "../BusinessProcessTracking";

const meta: Meta<typeof BusinessProcessTracking> = { title: "Azure/Integration/BusinessProcessTracking", component: BusinessProcessTracking };

export default meta;
type Story = StoryObj<typeof BusinessProcessTracking>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
