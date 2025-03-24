import type { Meta, StoryObj } from "@storybook/react";
import Vintage from "../Vintage";

const meta: Meta<typeof Vintage> = { title: "unDraw/Vintage", component: Vintage };

export default meta;
type Story = StoryObj<typeof Vintage>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
