import type { Meta, StoryObj } from "@storybook/react";
import Skateboard from "../Skateboard";

const meta: Meta<typeof Skateboard> = { title: "unDraw/Skateboard", component: Skateboard };

export default meta;
type Story = StoryObj<typeof Skateboard>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
