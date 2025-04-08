import type { Meta, StoryObj } from "@storybook/react";
import HighFive from "../HighFive";

const meta: Meta<typeof HighFive> = { title: "unDraw/HighFive", component: HighFive };

export default meta;
type Story = StoryObj<typeof HighFive>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
