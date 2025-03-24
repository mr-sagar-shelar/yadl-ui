import type { Meta, StoryObj } from "@storybook/react";
import ThinkboxXMesh from "../ThinkboxXMesh";

const meta: Meta<typeof ThinkboxXMesh> = { title: "AWS/Compute/ThinkboxXMesh", component: ThinkboxXMesh };

export default meta;
type Story = StoryObj<typeof ThinkboxXMesh>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
