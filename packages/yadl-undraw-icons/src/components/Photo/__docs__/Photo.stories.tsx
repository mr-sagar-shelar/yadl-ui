import type { Meta, StoryObj } from "@storybook/react";
import Photo from "../Photo";

const meta: Meta<typeof Photo> = { title: "unDraw/Photo", component: Photo };

export default meta;
type Story = StoryObj<typeof Photo>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
