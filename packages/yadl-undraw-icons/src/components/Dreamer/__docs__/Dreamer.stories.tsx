import type { Meta, StoryObj } from "@storybook/react";
import Dreamer from "../Dreamer";

const meta: Meta<typeof Dreamer> = { title: "unDraw/Dreamer", component: Dreamer };

export default meta;
type Story = StoryObj<typeof Dreamer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
