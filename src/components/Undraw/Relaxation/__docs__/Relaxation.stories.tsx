import type { Meta, StoryObj } from "@storybook/react";
import Relaxation from "../Relaxation";

const meta: Meta<typeof Relaxation> = { title: "unDraw/Relaxation", component: Relaxation };

export default meta;
type Story = StoryObj<typeof Relaxation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
