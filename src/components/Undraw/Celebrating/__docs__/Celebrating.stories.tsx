import type { Meta, StoryObj } from "@storybook/react";
import Celebrating from "../Celebrating";

const meta: Meta<typeof Celebrating> = { title: "unDraw/Celebrating", component: Celebrating };

export default meta;
type Story = StoryObj<typeof Celebrating>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
