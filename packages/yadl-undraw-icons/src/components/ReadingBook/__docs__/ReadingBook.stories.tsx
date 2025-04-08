import type { Meta, StoryObj } from "@storybook/react";
import ReadingBook from "../ReadingBook";

const meta: Meta<typeof ReadingBook> = { title: "unDraw/ReadingBook", component: ReadingBook };

export default meta;
type Story = StoryObj<typeof ReadingBook>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
