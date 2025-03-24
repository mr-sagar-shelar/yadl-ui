import type { Meta, StoryObj } from "@storybook/react";
import ImageViewer from "../ImageViewer";

const meta: Meta<typeof ImageViewer> = { title: "unDraw/ImageViewer", component: ImageViewer };

export default meta;
type Story = StoryObj<typeof ImageViewer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
