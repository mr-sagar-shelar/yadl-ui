import type { Meta, StoryObj } from "@storybook/react";
import Adjustments from "../Adjustments";

const meta: Meta<typeof Adjustments> = { title: "unDraw/Adjustments", component: Adjustments };

export default meta;
type Story = StoryObj<typeof Adjustments>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
