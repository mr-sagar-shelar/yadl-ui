import type { Meta, StoryObj } from "@storybook/react";
import PhotoSharing from "../PhotoSharing";

const meta: Meta<typeof PhotoSharing> = { title: "unDraw/PhotoSharing", component: PhotoSharing };

export default meta;
type Story = StoryObj<typeof PhotoSharing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
