import type { Meta, StoryObj } from "@storybook/react";
import ArtificialIntelligence from "../ArtificialIntelligence";

const meta: Meta<typeof ArtificialIntelligence> = { title: "unDraw/ArtificialIntelligence", component: ArtificialIntelligence };

export default meta;
type Story = StoryObj<typeof ArtificialIntelligence>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
