import type { Meta, StoryObj } from "@storybook/react";
import SmileyFace from "../SmileyFace";

const meta: Meta<typeof SmileyFace> = { title: "unDraw/SmileyFace", component: SmileyFace };

export default meta;
type Story = StoryObj<typeof SmileyFace>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
