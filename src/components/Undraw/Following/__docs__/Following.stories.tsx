import type { Meta, StoryObj } from "@storybook/react";
import Following from "../Following";

const meta: Meta<typeof Following> = { title: "unDraw/Following", component: Following };

export default meta;
type Story = StoryObj<typeof Following>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
