import type { Meta, StoryObj } from "@storybook/react";
import ReadNotes from "../ReadNotes";

const meta: Meta<typeof ReadNotes> = { title: "unDraw/ReadNotes", component: ReadNotes };

export default meta;
type Story = StoryObj<typeof ReadNotes>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
