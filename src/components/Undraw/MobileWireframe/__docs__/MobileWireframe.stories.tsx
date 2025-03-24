import type { Meta, StoryObj } from "@storybook/react";
import MobileWireframe from "../MobileWireframe";

const meta: Meta<typeof MobileWireframe> = { title: "unDraw/MobileWireframe", component: MobileWireframe };

export default meta;
type Story = StoryObj<typeof MobileWireframe>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
