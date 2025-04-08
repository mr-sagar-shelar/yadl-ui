import type { Meta, StoryObj } from "@storybook/react";
import Camera from "../Camera";

const meta: Meta<typeof Camera> = { title: "unDraw/Camera", component: Camera };

export default meta;
type Story = StoryObj<typeof Camera>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
