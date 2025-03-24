import type { Meta, StoryObj } from "@storybook/react";
import SwipeOptions from "../SwipeOptions";

const meta: Meta<typeof SwipeOptions> = { title: "unDraw/SwipeOptions", component: SwipeOptions };

export default meta;
type Story = StoryObj<typeof SwipeOptions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
