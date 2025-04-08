import type { Meta, StoryObj } from "@storybook/react";
import Alert from "../Alert";

const meta: Meta<typeof Alert> = { title: "unDraw/Alert", component: Alert };

export default meta;
type Story = StoryObj<typeof Alert>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
