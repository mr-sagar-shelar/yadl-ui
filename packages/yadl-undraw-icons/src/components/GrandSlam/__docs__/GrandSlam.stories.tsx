import type { Meta, StoryObj } from "@storybook/react";
import GrandSlam from "../GrandSlam";

const meta: Meta<typeof GrandSlam> = { title: "unDraw/GrandSlam", component: GrandSlam };

export default meta;
type Story = StoryObj<typeof GrandSlam>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
