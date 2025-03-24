import type { Meta, StoryObj } from "@storybook/react";
import Metrics from "../Metrics";

const meta: Meta<typeof Metrics> = { title: "unDraw/Metrics", component: Metrics };

export default meta;
type Story = StoryObj<typeof Metrics>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
