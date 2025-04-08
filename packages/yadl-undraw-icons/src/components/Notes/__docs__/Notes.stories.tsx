import type { Meta, StoryObj } from "@storybook/react";
import Notes from "../Notes";

const meta: Meta<typeof Notes> = { title: "unDraw/Notes", component: Notes };

export default meta;
type Story = StoryObj<typeof Notes>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
