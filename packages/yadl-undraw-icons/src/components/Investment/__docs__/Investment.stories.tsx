import type { Meta, StoryObj } from "@storybook/react";
import Investment from "../Investment";

const meta: Meta<typeof Investment> = { title: "unDraw/Investment", component: Investment };

export default meta;
type Story = StoryObj<typeof Investment>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
