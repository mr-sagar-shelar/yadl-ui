import type { Meta, StoryObj } from "@storybook/react";
import Programming from "../Programming";

const meta: Meta<typeof Programming> = { title: "unDraw/Programming", component: Programming };

export default meta;
type Story = StoryObj<typeof Programming>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
