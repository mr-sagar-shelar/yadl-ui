import type { Meta, StoryObj } from "@storybook/react";
import RoadSign from "../RoadSign";

const meta: Meta<typeof RoadSign> = { title: "unDraw/RoadSign", component: RoadSign };

export default meta;
type Story = StoryObj<typeof RoadSign>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
