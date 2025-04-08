import type { Meta, StoryObj } from "@storybook/react";
import Meditating from "../Meditating";

const meta: Meta<typeof Meditating> = { title: "unDraw/Meditating", component: Meditating };

export default meta;
type Story = StoryObj<typeof Meditating>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
