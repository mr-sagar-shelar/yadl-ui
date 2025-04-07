import type { Meta, StoryObj } from "@storybook/react";
import Box3 from "../Box3";

const meta: Meta<typeof Box3> = { title: "Box/Box3", component: Box3 };

export default meta;
type Story = StoryObj<typeof Box3>;

export const Primary: Story = {
  args: {
    height: 330,
    width: 250,
    title: "Card Title",
    text: "Using Lorem ipsum to focus attention on graphic elements in a webpage design proposal · One of the earliest examples of the Lorem ipsum placeholder text on 1960s advertising...",
  },
};
