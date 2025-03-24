import type { Meta, StoryObj } from "@storybook/react";
import Autumn from "../Autumn";

const meta: Meta<typeof Autumn> = { title: "unDraw/Autumn", component: Autumn };

export default meta;
type Story = StoryObj<typeof Autumn>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
