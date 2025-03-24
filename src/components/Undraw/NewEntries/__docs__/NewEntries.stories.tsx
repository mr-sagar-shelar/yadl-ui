import type { Meta, StoryObj } from "@storybook/react";
import NewEntries from "../NewEntries";

const meta: Meta<typeof NewEntries> = { title: "unDraw/NewEntries", component: NewEntries };

export default meta;
type Story = StoryObj<typeof NewEntries>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
