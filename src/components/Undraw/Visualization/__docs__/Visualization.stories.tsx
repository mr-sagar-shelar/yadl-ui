import type { Meta, StoryObj } from "@storybook/react";
import Visualization from "../Visualization";

const meta: Meta<typeof Visualization> = { title: "unDraw/Visualization", component: Visualization };

export default meta;
type Story = StoryObj<typeof Visualization>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
