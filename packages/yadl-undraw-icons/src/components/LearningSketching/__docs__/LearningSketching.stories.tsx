import type { Meta, StoryObj } from "@storybook/react";
import LearningSketching from "../LearningSketching";

const meta: Meta<typeof LearningSketching> = { title: "unDraw/LearningSketching", component: LearningSketching };

export default meta;
type Story = StoryObj<typeof LearningSketching>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
