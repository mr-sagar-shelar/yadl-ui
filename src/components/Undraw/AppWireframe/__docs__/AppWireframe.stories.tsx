import type { Meta, StoryObj } from "@storybook/react";
import AppWireframe from "../AppWireframe";

const meta: Meta<typeof AppWireframe> = { title: "unDraw/AppWireframe", component: AppWireframe };

export default meta;
type Story = StoryObj<typeof AppWireframe>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
