import type { Meta, StoryObj } from "@storybook/react";
import CompleteForm from "../CompleteForm";

const meta: Meta<typeof CompleteForm> = { title: "unDraw/CompleteForm", component: CompleteForm };

export default meta;
type Story = StoryObj<typeof CompleteForm>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
