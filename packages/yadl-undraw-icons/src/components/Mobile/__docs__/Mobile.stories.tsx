import type { Meta, StoryObj } from "@storybook/react";
import Mobile from "../Mobile";

const meta: Meta<typeof Mobile> = { title: "unDraw/Mobile", component: Mobile };

export default meta;
type Story = StoryObj<typeof Mobile>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
