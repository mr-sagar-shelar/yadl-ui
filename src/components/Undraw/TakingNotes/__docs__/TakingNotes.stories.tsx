import type { Meta, StoryObj } from "@storybook/react";
import TakingNotes from "../TakingNotes";

const meta: Meta<typeof TakingNotes> = { title: "unDraw/TakingNotes", component: TakingNotes };

export default meta;
type Story = StoryObj<typeof TakingNotes>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
