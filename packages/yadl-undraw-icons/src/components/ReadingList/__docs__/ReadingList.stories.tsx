import type { Meta, StoryObj } from "@storybook/react";
import ReadingList from "../ReadingList";

const meta: Meta<typeof ReadingList> = { title: "unDraw/ReadingList", component: ReadingList };

export default meta;
type Story = StoryObj<typeof ReadingList>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
