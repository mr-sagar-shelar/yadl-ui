import type { Meta, StoryObj } from "@storybook/react";
import ReadingTime from "../ReadingTime";

const meta: Meta<typeof ReadingTime> = { title: "unDraw/ReadingTime", component: ReadingTime };

export default meta;
type Story = StoryObj<typeof ReadingTime>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
