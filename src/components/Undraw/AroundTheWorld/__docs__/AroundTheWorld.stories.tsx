import type { Meta, StoryObj } from "@storybook/react";
import AroundTheWorld from "../AroundTheWorld";

const meta: Meta<typeof AroundTheWorld> = { title: "unDraw/AroundTheWorld", component: AroundTheWorld };

export default meta;
type Story = StoryObj<typeof AroundTheWorld>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
