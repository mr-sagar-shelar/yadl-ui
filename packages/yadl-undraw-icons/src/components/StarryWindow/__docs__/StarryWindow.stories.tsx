import type { Meta, StoryObj } from "@storybook/react";
import StarryWindow from "../StarryWindow";

const meta: Meta<typeof StarryWindow> = { title: "unDraw/StarryWindow", component: StarryWindow };

export default meta;
type Story = StoryObj<typeof StarryWindow>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
