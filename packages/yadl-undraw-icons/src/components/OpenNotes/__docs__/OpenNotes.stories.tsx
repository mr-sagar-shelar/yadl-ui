import type { Meta, StoryObj } from "@storybook/react";
import OpenNotes from "../OpenNotes";

const meta: Meta<typeof OpenNotes> = { title: "unDraw/OpenNotes", component: OpenNotes };

export default meta;
type Story = StoryObj<typeof OpenNotes>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
