import type { Meta, StoryObj } from "@storybook/react";
import CorrectAnswer from "../CorrectAnswer";

const meta: Meta<typeof CorrectAnswer> = { title: "unDraw/CorrectAnswer", component: CorrectAnswer };

export default meta;
type Story = StoryObj<typeof CorrectAnswer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
