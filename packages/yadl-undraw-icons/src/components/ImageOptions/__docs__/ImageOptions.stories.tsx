import type { Meta, StoryObj } from "@storybook/react";
import ImageOptions from "../ImageOptions";

const meta: Meta<typeof ImageOptions> = { title: "unDraw/ImageOptions", component: ImageOptions };

export default meta;
type Story = StoryObj<typeof ImageOptions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
