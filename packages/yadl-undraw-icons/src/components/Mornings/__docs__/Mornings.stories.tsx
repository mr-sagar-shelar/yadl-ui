import type { Meta, StoryObj } from "@storybook/react";
import Mornings from "../Mornings";

const meta: Meta<typeof Mornings> = { title: "unDraw/Mornings", component: Mornings };

export default meta;
type Story = StoryObj<typeof Mornings>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
