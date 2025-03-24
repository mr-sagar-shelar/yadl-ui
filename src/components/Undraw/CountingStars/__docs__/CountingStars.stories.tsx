import type { Meta, StoryObj } from "@storybook/react";
import CountingStars from "../CountingStars";

const meta: Meta<typeof CountingStars> = { title: "unDraw/CountingStars", component: CountingStars };

export default meta;
type Story = StoryObj<typeof CountingStars>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
