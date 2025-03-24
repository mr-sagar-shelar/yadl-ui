import type { Meta, StoryObj } from "@storybook/react";
import FlutterDev from "../FlutterDev";

const meta: Meta<typeof FlutterDev> = { title: "unDraw/FlutterDev", component: FlutterDev };

export default meta;
type Story = StoryObj<typeof FlutterDev>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
