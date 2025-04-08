import type { Meta, StoryObj } from "@storybook/react";
import Winter_roadWinterRoad from "../Winter_roadWinterRoad";

const meta: Meta<typeof Winter_roadWinterRoad> = { title: "unDraw/Winter_roadWinterRoad", component: Winter_roadWinterRoad };

export default meta;
type Story = StoryObj<typeof Winter_roadWinterRoad>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
