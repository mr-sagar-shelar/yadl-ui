import type { Meta, StoryObj } from "@storybook/react";
import ToyCarToyCar from "../ToyCarToyCar";

const meta: Meta<typeof ToyCarToyCar> = { title: "unDraw/ToyCarToyCar", component: ToyCarToyCar };

export default meta;
type Story = StoryObj<typeof ToyCarToyCar>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
