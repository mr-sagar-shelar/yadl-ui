import type { Meta, StoryObj } from "@storybook/react";
import WellDone from "../WellDone";

const meta: Meta<typeof WellDone> = { title: "unDraw/WellDone", component: WellDone };

export default meta;
type Story = StoryObj<typeof WellDone>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
