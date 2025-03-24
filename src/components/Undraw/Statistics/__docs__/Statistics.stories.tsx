import type { Meta, StoryObj } from "@storybook/react";
import Statistics from "../Statistics";

const meta: Meta<typeof Statistics> = { title: "unDraw/Statistics", component: Statistics };

export default meta;
type Story = StoryObj<typeof Statistics>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
