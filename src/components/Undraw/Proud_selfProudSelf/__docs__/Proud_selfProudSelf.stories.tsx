import type { Meta, StoryObj } from "@storybook/react";
import Proud_selfProudSelf from "../Proud_selfProudSelf";

const meta: Meta<typeof Proud_selfProudSelf> = { title: "unDraw/Proud_selfProudSelf", component: Proud_selfProudSelf };

export default meta;
type Story = StoryObj<typeof Proud_selfProudSelf>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
