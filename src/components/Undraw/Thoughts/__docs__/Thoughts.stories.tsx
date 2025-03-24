import type { Meta, StoryObj } from "@storybook/react";
import Thoughts from "../Thoughts";

const meta: Meta<typeof Thoughts> = { title: "unDraw/Thoughts", component: Thoughts };

export default meta;
type Story = StoryObj<typeof Thoughts>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
