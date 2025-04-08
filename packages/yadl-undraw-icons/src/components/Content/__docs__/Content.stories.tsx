import type { Meta, StoryObj } from "@storybook/react";
import Content from "../Content";

const meta: Meta<typeof Content> = { title: "unDraw/Content", component: Content };

export default meta;
type Story = StoryObj<typeof Content>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
