import type { Meta, StoryObj } from "@storybook/react";
import Donut_loveDonutLove from "../Donut_loveDonutLove";

const meta: Meta<typeof Donut_loveDonutLove> = { title: "unDraw/Donut_loveDonutLove", component: Donut_loveDonutLove };

export default meta;
type Story = StoryObj<typeof Donut_loveDonutLove>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
