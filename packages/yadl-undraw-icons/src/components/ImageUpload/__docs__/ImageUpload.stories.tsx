import type { Meta, StoryObj } from "@storybook/react";
import ImageUpload from "../ImageUpload";

const meta: Meta<typeof ImageUpload> = { title: "unDraw/ImageUpload", component: ImageUpload };

export default meta;
type Story = StoryObj<typeof ImageUpload>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
