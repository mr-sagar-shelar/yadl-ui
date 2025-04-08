import type { Meta, StoryObj } from "@storybook/react";
import Contrast from "../Contrast";

const meta: Meta<typeof Contrast> = { title: "unDraw/Contrast", component: Contrast };

export default meta;
type Story = StoryObj<typeof Contrast>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
