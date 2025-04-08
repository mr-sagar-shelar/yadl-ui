import type { Meta, StoryObj } from "@storybook/react";
import OpenSourceOpenSource from "../OpenSourceOpenSource";

const meta: Meta<typeof OpenSourceOpenSource> = { title: "unDraw/OpenSourceOpenSource", component: OpenSourceOpenSource };

export default meta;
type Story = StoryObj<typeof OpenSourceOpenSource>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
