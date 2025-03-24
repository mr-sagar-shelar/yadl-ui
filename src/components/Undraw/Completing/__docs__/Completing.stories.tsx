import type { Meta, StoryObj } from "@storybook/react";
import Completing from "../Completing";

const meta: Meta<typeof Completing> = { title: "unDraw/Completing", component: Completing };

export default meta;
type Story = StoryObj<typeof Completing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
