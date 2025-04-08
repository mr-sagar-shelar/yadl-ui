import type { Meta, StoryObj } from "@storybook/react";
import ADayAtThePark from "../ADayAtThePark";

const meta: Meta<typeof ADayAtThePark> = { title: "unDraw/ADayAtThePark", component: ADayAtThePark };

export default meta;
type Story = StoryObj<typeof ADayAtThePark>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
