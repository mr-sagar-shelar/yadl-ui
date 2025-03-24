import type { Meta, StoryObj } from "@storybook/react";
import Quiz from "../Quiz";

const meta: Meta<typeof Quiz> = { title: "unDraw/Quiz", component: Quiz };

export default meta;
type Story = StoryObj<typeof Quiz>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
