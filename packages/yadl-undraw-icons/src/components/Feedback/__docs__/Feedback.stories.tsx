import type { Meta, StoryObj } from "@storybook/react";
import Feedback from "../Feedback";

const meta: Meta<typeof Feedback> = { title: "unDraw/Feedback", component: Feedback };

export default meta;
type Story = StoryObj<typeof Feedback>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
