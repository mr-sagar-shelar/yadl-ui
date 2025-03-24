import type { Meta, StoryObj } from "@storybook/react";
import Photos from "../Photos";

const meta: Meta<typeof Photos> = { title: "unDraw/Photos", component: Photos };

export default meta;
type Story = StoryObj<typeof Photos>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
