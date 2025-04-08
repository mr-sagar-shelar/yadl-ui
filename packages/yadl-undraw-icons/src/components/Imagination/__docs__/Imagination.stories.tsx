import type { Meta, StoryObj } from "@storybook/react";
import Imagination from "../Imagination";

const meta: Meta<typeof Imagination> = { title: "unDraw/Imagination", component: Imagination };

export default meta;
type Story = StoryObj<typeof Imagination>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
