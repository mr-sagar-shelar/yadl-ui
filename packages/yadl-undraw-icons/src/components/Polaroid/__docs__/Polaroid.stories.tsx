import type { Meta, StoryObj } from "@storybook/react";
import Polaroid from "../Polaroid";

const meta: Meta<typeof Polaroid> = { title: "unDraw/Polaroid", component: Polaroid };

export default meta;
type Story = StoryObj<typeof Polaroid>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
