import type { Meta, StoryObj } from "@storybook/react";
import Flagged from "../Flagged";

const meta: Meta<typeof Flagged> = { title: "unDraw/Flagged", component: Flagged };

export default meta;
type Story = StoryObj<typeof Flagged>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
