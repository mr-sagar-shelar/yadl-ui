import type { Meta, StoryObj } from "@storybook/react";
import ModernDesign from "../ModernDesign";

const meta: Meta<typeof ModernDesign> = { title: "unDraw/ModernDesign", component: ModernDesign };

export default meta;
type Story = StoryObj<typeof ModernDesign>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
