import type { Meta, StoryObj } from "@storybook/react";
import CompletionProgress from "../CompletionProgress";

const meta: Meta<typeof CompletionProgress> = { title: "unDraw/CompletionProgress", component: CompletionProgress };

export default meta;
type Story = StoryObj<typeof CompletionProgress>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
