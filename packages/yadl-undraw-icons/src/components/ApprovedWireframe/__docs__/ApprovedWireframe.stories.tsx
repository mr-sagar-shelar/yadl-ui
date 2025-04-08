import type { Meta, StoryObj } from "@storybook/react";
import ApprovedWireframe from "../ApprovedWireframe";

const meta: Meta<typeof ApprovedWireframe> = { title: "unDraw/ApprovedWireframe", component: ApprovedWireframe };

export default meta;
type Story = StoryObj<typeof ApprovedWireframe>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
