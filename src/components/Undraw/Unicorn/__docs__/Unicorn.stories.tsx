import type { Meta, StoryObj } from "@storybook/react";
import Unicorn from "../Unicorn";

const meta: Meta<typeof Unicorn> = { title: "unDraw/Unicorn", component: Unicorn };

export default meta;
type Story = StoryObj<typeof Unicorn>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
