import type { Meta, StoryObj } from "@storybook/react";
import Target from "../Target";

const meta: Meta<typeof Target> = { title: "unDraw/Target", component: Target };

export default meta;
type Story = StoryObj<typeof Target>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
