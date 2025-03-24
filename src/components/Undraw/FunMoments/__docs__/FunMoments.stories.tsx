import type { Meta, StoryObj } from "@storybook/react";
import FunMoments from "../FunMoments";

const meta: Meta<typeof FunMoments> = { title: "unDraw/FunMoments", component: FunMoments };

export default meta;
type Story = StoryObj<typeof FunMoments>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
