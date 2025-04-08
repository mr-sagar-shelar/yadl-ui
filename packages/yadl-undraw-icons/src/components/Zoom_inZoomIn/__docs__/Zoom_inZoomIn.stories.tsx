import type { Meta, StoryObj } from "@storybook/react";
import Zoom_inZoomIn from "../Zoom_inZoomIn";

const meta: Meta<typeof Zoom_inZoomIn> = { title: "unDraw/Zoom_inZoomIn", component: Zoom_inZoomIn };

export default meta;
type Story = StoryObj<typeof Zoom_inZoomIn>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
