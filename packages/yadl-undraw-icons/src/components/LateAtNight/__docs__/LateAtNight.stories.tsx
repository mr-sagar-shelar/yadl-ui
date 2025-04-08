import type { Meta, StoryObj } from "@storybook/react";
import LateAtNight from "../LateAtNight";

const meta: Meta<typeof LateAtNight> = { title: "unDraw/LateAtNight", component: LateAtNight };

export default meta;
type Story = StoryObj<typeof LateAtNight>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
