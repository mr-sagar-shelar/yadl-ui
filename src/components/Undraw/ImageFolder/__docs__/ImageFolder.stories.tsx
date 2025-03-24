import type { Meta, StoryObj } from "@storybook/react";
import ImageFolder from "../ImageFolder";

const meta: Meta<typeof ImageFolder> = { title: "unDraw/ImageFolder", component: ImageFolder };

export default meta;
type Story = StoryObj<typeof ImageFolder>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
