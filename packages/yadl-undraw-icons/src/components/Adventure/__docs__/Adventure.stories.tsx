import type { Meta, StoryObj } from "@storybook/react";
import Adventure from "../Adventure";

const meta: Meta<typeof Adventure> = { title: "unDraw/Adventure", component: Adventure };

export default meta;
type Story = StoryObj<typeof Adventure>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
