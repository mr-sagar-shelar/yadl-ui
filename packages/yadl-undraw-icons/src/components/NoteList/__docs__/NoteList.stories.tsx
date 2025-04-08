import type { Meta, StoryObj } from "@storybook/react";
import NoteList from "../NoteList";

const meta: Meta<typeof NoteList> = { title: "unDraw/NoteList", component: NoteList };

export default meta;
type Story = StoryObj<typeof NoteList>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
