import type { Meta, StoryObj } from "@storybook/react";
import Grandma from "../Grandma";

const meta: Meta<typeof Grandma> = { title: "unDraw/Grandma", component: Grandma };

export default meta;
type Story = StoryObj<typeof Grandma>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
