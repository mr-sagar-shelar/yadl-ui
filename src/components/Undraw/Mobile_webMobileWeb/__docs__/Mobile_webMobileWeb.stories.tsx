import type { Meta, StoryObj } from "@storybook/react";
import Mobile_webMobileWeb from "../Mobile_webMobileWeb";

const meta: Meta<typeof Mobile_webMobileWeb> = { title: "unDraw/Mobile_webMobileWeb", component: Mobile_webMobileWeb };

export default meta;
type Story = StoryObj<typeof Mobile_webMobileWeb>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
