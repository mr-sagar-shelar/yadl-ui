import type { Meta, StoryObj } from "@storybook/react";
import DesignNotes from "../DesignNotes";

const meta: Meta<typeof DesignNotes> = { title: "unDraw/DesignNotes", component: DesignNotes };

export default meta;
type Story = StoryObj<typeof DesignNotes>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
