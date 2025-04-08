import type { Meta, StoryObj } from "@storybook/react";
import Mobile_imagesMobileImages from "../Mobile_imagesMobileImages";

const meta: Meta<typeof Mobile_imagesMobileImages> = { title: "unDraw/Mobile_imagesMobileImages", component: Mobile_imagesMobileImages };

export default meta;
type Story = StoryObj<typeof Mobile_imagesMobileImages>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
