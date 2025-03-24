import type { Meta, StoryObj } from "@storybook/react";
import UploadImage from "../UploadImage";

const meta: Meta<typeof UploadImage> = { title: "unDraw/UploadImage", component: UploadImage };

export default meta;
type Story = StoryObj<typeof UploadImage>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
