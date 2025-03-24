import type { Meta, StoryObj } from "@storybook/react";
import MobilePhotos from "../MobilePhotos";

const meta: Meta<typeof MobilePhotos> = { title: "unDraw/MobilePhotos", component: MobilePhotos };

export default meta;
type Story = StoryObj<typeof MobilePhotos>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
