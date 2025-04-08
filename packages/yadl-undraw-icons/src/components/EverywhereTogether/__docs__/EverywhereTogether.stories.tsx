import type { Meta, StoryObj } from "@storybook/react";
import EverywhereTogether from "../EverywhereTogether";

const meta: Meta<typeof EverywhereTogether> = { title: "unDraw/EverywhereTogether", component: EverywhereTogether };

export default meta;
type Story = StoryObj<typeof EverywhereTogether>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
