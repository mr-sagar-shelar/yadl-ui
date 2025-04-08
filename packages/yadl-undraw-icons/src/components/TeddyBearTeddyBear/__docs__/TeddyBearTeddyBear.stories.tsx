import type { Meta, StoryObj } from "@storybook/react";
import TeddyBearTeddyBear from "../TeddyBearTeddyBear";

const meta: Meta<typeof TeddyBearTeddyBear> = { title: "unDraw/TeddyBearTeddyBear", component: TeddyBearTeddyBear };

export default meta;
type Story = StoryObj<typeof TeddyBearTeddyBear>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
