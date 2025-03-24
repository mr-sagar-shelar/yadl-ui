import type { Meta, StoryObj } from "@storybook/react";
import Segment from "../Segment";

const meta: Meta<typeof Segment> = { title: "unDraw/Segment", component: Segment };

export default meta;
type Story = StoryObj<typeof Segment>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
