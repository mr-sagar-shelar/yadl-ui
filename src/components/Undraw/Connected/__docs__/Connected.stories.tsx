import type { Meta, StoryObj } from "@storybook/react";
import Connected from "../Connected";

const meta: Meta<typeof Connected> = { title: "unDraw/Connected", component: Connected };

export default meta;
type Story = StoryObj<typeof Connected>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
