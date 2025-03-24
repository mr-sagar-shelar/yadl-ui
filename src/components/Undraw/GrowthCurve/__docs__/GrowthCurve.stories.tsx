import type { Meta, StoryObj } from "@storybook/react";
import GrowthCurve from "../GrowthCurve";

const meta: Meta<typeof GrowthCurve> = { title: "unDraw/GrowthCurve", component: GrowthCurve };

export default meta;
type Story = StoryObj<typeof GrowthCurve>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
