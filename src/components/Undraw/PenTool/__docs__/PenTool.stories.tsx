import type { Meta, StoryObj } from "@storybook/react";
import PenTool from "../PenTool";

const meta: Meta<typeof PenTool> = { title: "unDraw/PenTool", component: PenTool };

export default meta;
type Story = StoryObj<typeof PenTool>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
