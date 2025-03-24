import type { Meta, StoryObj } from "@storybook/react";
import MonitorMonitor from "../MonitorMonitor";

const meta: Meta<typeof MonitorMonitor> = { title: "unDraw/MonitorMonitor", component: MonitorMonitor };

export default meta;
type Story = StoryObj<typeof MonitorMonitor>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
