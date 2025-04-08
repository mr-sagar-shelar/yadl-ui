import type { Meta, StoryObj } from "@storybook/react";
import BookReading from "../BookReading";

const meta: Meta<typeof BookReading> = { title: "unDraw/BookReading", component: BookReading };

export default meta;
type Story = StoryObj<typeof BookReading>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
