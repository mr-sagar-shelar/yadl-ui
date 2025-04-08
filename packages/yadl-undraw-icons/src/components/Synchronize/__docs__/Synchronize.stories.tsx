import type { Meta, StoryObj } from "@storybook/react";
import Synchronize from "../Synchronize";

const meta: Meta<typeof Synchronize> = { title: "unDraw/Synchronize", component: Synchronize };

export default meta;
type Story = StoryObj<typeof Synchronize>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
