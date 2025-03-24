import type { Meta, StoryObj } from "@storybook/react";
import Videographer from "../Videographer";

const meta: Meta<typeof Videographer> = { title: "unDraw/Videographer", component: Videographer };

export default meta;
type Story = StoryObj<typeof Videographer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
