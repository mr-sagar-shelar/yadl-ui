import type { Meta, StoryObj } from "@storybook/react";
import ByTheRoad from "../ByTheRoad";

const meta: Meta<typeof ByTheRoad> = { title: "unDraw/ByTheRoad", component: ByTheRoad };

export default meta;
type Story = StoryObj<typeof ByTheRoad>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
