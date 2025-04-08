import type { Meta, StoryObj } from "@storybook/react";
import MobileBrowsers from "../MobileBrowsers";

const meta: Meta<typeof MobileBrowsers> = { title: "unDraw/MobileBrowsers", component: MobileBrowsers };

export default meta;
type Story = StoryObj<typeof MobileBrowsers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
