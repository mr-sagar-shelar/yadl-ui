import type { Meta, StoryObj } from "@storybook/react";
import WordpressWordpress from "../WordpressWordpress";

const meta: Meta<typeof WordpressWordpress> = { title: "unDraw/WordpressWordpress", component: WordpressWordpress };

export default meta;
type Story = StoryObj<typeof WordpressWordpress>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
