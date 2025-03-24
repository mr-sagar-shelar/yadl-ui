import type { Meta, StoryObj } from "@storybook/react";
import ThroughTheDesert from "../ThroughTheDesert";

const meta: Meta<typeof ThroughTheDesert> = { title: "unDraw/ThroughTheDesert", component: ThroughTheDesert };

export default meta;
type Story = StoryObj<typeof ThroughTheDesert>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
