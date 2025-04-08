import type { Meta, StoryObj } from "@storybook/react";
import SuperThankYou from "../SuperThankYou";

const meta: Meta<typeof SuperThankYou> = { title: "unDraw/SuperThankYou", component: SuperThankYou };

export default meta;
type Story = StoryObj<typeof SuperThankYou>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
