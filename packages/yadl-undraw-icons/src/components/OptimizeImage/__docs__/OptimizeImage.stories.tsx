import type { Meta, StoryObj } from "@storybook/react";
import OptimizeImage from "../OptimizeImage";

const meta: Meta<typeof OptimizeImage> = { title: "unDraw/OptimizeImage", component: OptimizeImage };

export default meta;
type Story = StoryObj<typeof OptimizeImage>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
