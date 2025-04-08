import type { Meta, StoryObj } from "@storybook/react";
import SunnyDay from "../SunnyDay";

const meta: Meta<typeof SunnyDay> = { title: "unDraw/SunnyDay", component: SunnyDay };

export default meta;
type Story = StoryObj<typeof SunnyDay>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
