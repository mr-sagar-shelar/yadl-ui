import type { Meta, StoryObj } from "@storybook/react";
import ConfidentialLetter from "../ConfidentialLetter";

const meta: Meta<typeof ConfidentialLetter> = { title: "unDraw/ConfidentialLetter", component: ConfidentialLetter };

export default meta;
type Story = StoryObj<typeof ConfidentialLetter>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
