import type { Meta, StoryObj } from "@storybook/react";
import Popular from "../Popular";

const meta: Meta<typeof Popular> = { title: "unDraw/Popular", component: Popular };

export default meta;
type Story = StoryObj<typeof Popular>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
