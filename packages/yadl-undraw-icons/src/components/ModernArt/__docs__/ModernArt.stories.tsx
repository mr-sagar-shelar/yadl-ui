import type { Meta, StoryObj } from "@storybook/react";
import ModernArt from "../ModernArt";

const meta: Meta<typeof ModernArt> = { title: "unDraw/ModernArt", component: ModernArt };

export default meta;
type Story = StoryObj<typeof ModernArt>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
