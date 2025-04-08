import type { Meta, StoryObj } from "@storybook/react";
import DataZone from "../DataZone";

const meta: Meta<typeof DataZone> = { title: "AWS/Analytics/DataZone", component: DataZone };

export default meta;
type Story = StoryObj<typeof DataZone>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
