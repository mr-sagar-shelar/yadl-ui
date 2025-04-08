import type { Meta, StoryObj } from "@storybook/react";
import ModernLife from "../ModernLife";

const meta: Meta<typeof ModernLife> = { title: "unDraw/ModernLife", component: ModernLife };

export default meta;
type Story = StoryObj<typeof ModernLife>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
