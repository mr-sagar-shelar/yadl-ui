import type { Meta, StoryObj } from "@storybook/react";
import OffRoad from "../OffRoad";

const meta: Meta<typeof OffRoad> = { title: "unDraw/OffRoad", component: OffRoad };

export default meta;
type Story = StoryObj<typeof OffRoad>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
