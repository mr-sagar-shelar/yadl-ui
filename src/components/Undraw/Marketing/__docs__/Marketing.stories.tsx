import type { Meta, StoryObj } from "@storybook/react";
import Marketing from "../Marketing";

const meta: Meta<typeof Marketing> = { title: "unDraw/Marketing", component: Marketing };

export default meta;
type Story = StoryObj<typeof Marketing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
