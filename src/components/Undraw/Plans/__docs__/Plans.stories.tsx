import type { Meta, StoryObj } from "@storybook/react";
import Plans from "../Plans";

const meta: Meta<typeof Plans> = { title: "unDraw/Plans", component: Plans };

export default meta;
type Story = StoryObj<typeof Plans>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
