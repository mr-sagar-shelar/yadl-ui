import type { Meta, StoryObj } from "@storybook/react";
import AddNotes from "../AddNotes";

const meta: Meta<typeof AddNotes> = { title: "unDraw/AddNotes", component: AddNotes };

export default meta;
type Story = StoryObj<typeof AddNotes>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
