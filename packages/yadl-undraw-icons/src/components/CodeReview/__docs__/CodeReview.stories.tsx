import type { Meta, StoryObj } from "@storybook/react";
import CodeReview from "../CodeReview";

const meta: Meta<typeof CodeReview> = { title: "unDraw/CodeReview", component: CodeReview };

export default meta;
type Story = StoryObj<typeof CodeReview>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
