import type { Meta, StoryObj } from "@storybook/react";
import At_the_parkAtThePark from "../At_the_parkAtThePark";

const meta: Meta<typeof At_the_parkAtThePark> = { title: "unDraw/At_the_parkAtThePark", component: At_the_parkAtThePark };

export default meta;
type Story = StoryObj<typeof At_the_parkAtThePark>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
