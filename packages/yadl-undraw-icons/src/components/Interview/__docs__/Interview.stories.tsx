import type { Meta, StoryObj } from "@storybook/react";
import Interview from "../Interview";

const meta: Meta<typeof Interview> = { title: "unDraw/Interview", component: Interview };

export default meta;
type Story = StoryObj<typeof Interview>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
