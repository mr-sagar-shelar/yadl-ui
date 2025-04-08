import type { Meta, StoryObj } from "@storybook/react";
import RandomThoughts from "../RandomThoughts";

const meta: Meta<typeof RandomThoughts> = { title: "unDraw/RandomThoughts", component: RandomThoughts };

export default meta;
type Story = StoryObj<typeof RandomThoughts>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
