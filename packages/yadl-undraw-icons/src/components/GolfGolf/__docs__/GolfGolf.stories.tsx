import type { Meta, StoryObj } from "@storybook/react";
import GolfGolf from "../GolfGolf";

const meta: Meta<typeof GolfGolf> = { title: "unDraw/GolfGolf", component: GolfGolf };

export default meta;
type Story = StoryObj<typeof GolfGolf>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
