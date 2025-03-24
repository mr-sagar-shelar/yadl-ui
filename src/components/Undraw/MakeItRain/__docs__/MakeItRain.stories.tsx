import type { Meta, StoryObj } from "@storybook/react";
import MakeItRain from "../MakeItRain";

const meta: Meta<typeof MakeItRain> = { title: "unDraw/MakeItRain", component: MakeItRain };

export default meta;
type Story = StoryObj<typeof MakeItRain>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
