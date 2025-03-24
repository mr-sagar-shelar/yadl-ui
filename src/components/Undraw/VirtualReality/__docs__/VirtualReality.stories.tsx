import type { Meta, StoryObj } from "@storybook/react";
import VirtualReality from "../VirtualReality";

const meta: Meta<typeof VirtualReality> = { title: "unDraw/VirtualReality", component: VirtualReality };

export default meta;
type Story = StoryObj<typeof VirtualReality>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
