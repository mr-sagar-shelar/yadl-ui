import type { Meta, StoryObj } from "@storybook/react";
import RoadToKnowledge from "../RoadToKnowledge";

const meta: Meta<typeof RoadToKnowledge> = { title: "unDraw/RoadToKnowledge", component: RoadToKnowledge };

export default meta;
type Story = StoryObj<typeof RoadToKnowledge>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
