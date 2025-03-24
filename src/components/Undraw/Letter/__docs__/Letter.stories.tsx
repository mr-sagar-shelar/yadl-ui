import type { Meta, StoryObj } from "@storybook/react";
import Letter from "../Letter";

const meta: Meta<typeof Letter> = { title: "unDraw/Letter", component: Letter };

export default meta;
type Story = StoryObj<typeof Letter>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
