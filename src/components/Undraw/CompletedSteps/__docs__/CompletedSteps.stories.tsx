import type { Meta, StoryObj } from "@storybook/react";
import CompletedSteps from "../CompletedSteps";

const meta: Meta<typeof CompletedSteps> = { title: "unDraw/CompletedSteps", component: CompletedSteps };

export default meta;
type Story = StoryObj<typeof CompletedSteps>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
