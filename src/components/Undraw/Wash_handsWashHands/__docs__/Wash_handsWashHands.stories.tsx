import type { Meta, StoryObj } from "@storybook/react";
import Wash_handsWashHands from "../Wash_handsWashHands";

const meta: Meta<typeof Wash_handsWashHands> = { title: "unDraw/Wash_handsWashHands", component: Wash_handsWashHands };

export default meta;
type Story = StoryObj<typeof Wash_handsWashHands>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
