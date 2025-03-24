import type { Meta, StoryObj } from "@storybook/react";
import ModernWoman from "../ModernWoman";

const meta: Meta<typeof ModernWoman> = { title: "unDraw/ModernWoman", component: ModernWoman };

export default meta;
type Story = StoryObj<typeof ModernWoman>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
