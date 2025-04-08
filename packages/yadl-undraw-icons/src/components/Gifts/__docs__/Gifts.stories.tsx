import type { Meta, StoryObj } from "@storybook/react";
import Gifts from "../Gifts";

const meta: Meta<typeof Gifts> = { title: "unDraw/Gifts", component: Gifts };

export default meta;
type Story = StoryObj<typeof Gifts>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
