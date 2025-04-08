import type { Meta, StoryObj } from "@storybook/react";
import Hooked from "../Hooked";

const meta: Meta<typeof Hooked> = { title: "unDraw/Hooked", component: Hooked };

export default meta;
type Story = StoryObj<typeof Hooked>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
