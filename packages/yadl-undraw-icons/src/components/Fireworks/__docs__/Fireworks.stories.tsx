import type { Meta, StoryObj } from "@storybook/react";
import Fireworks from "../Fireworks";

const meta: Meta<typeof Fireworks> = { title: "unDraw/Fireworks", component: Fireworks };

export default meta;
type Story = StoryObj<typeof Fireworks>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
