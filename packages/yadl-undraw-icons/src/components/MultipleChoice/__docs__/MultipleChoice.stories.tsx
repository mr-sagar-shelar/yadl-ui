import type { Meta, StoryObj } from "@storybook/react";
import MultipleChoice from "../MultipleChoice";

const meta: Meta<typeof MultipleChoice> = { title: "unDraw/MultipleChoice", component: MultipleChoice };

export default meta;
type Story = StoryObj<typeof MultipleChoice>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
