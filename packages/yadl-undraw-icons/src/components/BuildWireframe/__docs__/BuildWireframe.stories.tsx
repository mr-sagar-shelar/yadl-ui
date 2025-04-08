import type { Meta, StoryObj } from "@storybook/react";
import BuildWireframe from "../BuildWireframe";

const meta: Meta<typeof BuildWireframe> = { title: "unDraw/BuildWireframe", component: BuildWireframe };

export default meta;
type Story = StoryObj<typeof BuildWireframe>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
