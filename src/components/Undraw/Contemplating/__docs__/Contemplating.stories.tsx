import type { Meta, StoryObj } from "@storybook/react";
import Contemplating from "../Contemplating";

const meta: Meta<typeof Contemplating> = { title: "unDraw/Contemplating", component: Contemplating };

export default meta;
type Story = StoryObj<typeof Contemplating>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
