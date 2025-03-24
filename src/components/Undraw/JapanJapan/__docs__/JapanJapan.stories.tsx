import type { Meta, StoryObj } from "@storybook/react";
import JapanJapan from "../JapanJapan";

const meta: Meta<typeof JapanJapan> = { title: "unDraw/JapanJapan", component: JapanJapan };

export default meta;
type Story = StoryObj<typeof JapanJapan>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
