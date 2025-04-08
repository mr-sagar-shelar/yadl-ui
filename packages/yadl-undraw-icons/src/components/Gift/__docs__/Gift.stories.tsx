import type { Meta, StoryObj } from "@storybook/react";
import Gift from "../Gift";

const meta: Meta<typeof Gift> = { title: "unDraw/Gift", component: Gift };

export default meta;
type Story = StoryObj<typeof Gift>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
