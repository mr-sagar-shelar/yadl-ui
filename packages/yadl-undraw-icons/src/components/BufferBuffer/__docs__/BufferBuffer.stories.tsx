import type { Meta, StoryObj } from "@storybook/react";
import BufferBuffer from "../BufferBuffer";

const meta: Meta<typeof BufferBuffer> = { title: "unDraw/BufferBuffer", component: BufferBuffer };

export default meta;
type Story = StoryObj<typeof BufferBuffer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
