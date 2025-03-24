import type { Meta, StoryObj } from "@storybook/react";
import LoveIt from "../LoveIt";

const meta: Meta<typeof LoveIt> = { title: "unDraw/LoveIt", component: LoveIt };

export default meta;
type Story = StoryObj<typeof LoveIt>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
