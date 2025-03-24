import type { Meta, StoryObj } from "@storybook/react";
import PersonalNotesPersonalNotes from "../PersonalNotesPersonalNotes";

const meta: Meta<typeof PersonalNotesPersonalNotes> = { title: "unDraw/PersonalNotesPersonalNotes", component: PersonalNotesPersonalNotes };

export default meta;
type Story = StoryObj<typeof PersonalNotesPersonalNotes>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
