import type { Meta, StoryObj } from "@storybook/react";
import MindMap from "../MindMap";

const meta: Meta<typeof MindMap> = { title: "unDraw/MindMap", component: MindMap };

export default meta;
type Story = StoryObj<typeof MindMap>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
