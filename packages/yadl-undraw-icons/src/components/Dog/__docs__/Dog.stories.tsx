import type { Meta, StoryObj } from "@storybook/react";
import Dog from "../Dog";

const meta: Meta<typeof Dog> = { title: "unDraw/Dog", component: Dog };

export default meta;
type Story = StoryObj<typeof Dog>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
