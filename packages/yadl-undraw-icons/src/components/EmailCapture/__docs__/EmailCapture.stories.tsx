import type { Meta, StoryObj } from "@storybook/react";
import EmailCapture from "../EmailCapture";

const meta: Meta<typeof EmailCapture> = { title: "unDraw/EmailCapture", component: EmailCapture };

export default meta;
type Story = StoryObj<typeof EmailCapture>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
