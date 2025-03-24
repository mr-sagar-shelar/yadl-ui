import type { Meta, StoryObj } from "@storybook/react";
import NewIdeas from "../NewIdeas";

const meta: Meta<typeof NewIdeas> = { title: "unDraw/NewIdeas", component: NewIdeas };

export default meta;
type Story = StoryObj<typeof NewIdeas>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
