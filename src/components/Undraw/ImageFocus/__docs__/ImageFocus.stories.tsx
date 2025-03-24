import type { Meta, StoryObj } from "@storybook/react";
import ImageFocus from "../ImageFocus";

const meta: Meta<typeof ImageFocus> = { title: "unDraw/ImageFocus", component: ImageFocus };

export default meta;
type Story = StoryObj<typeof ImageFocus>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
