import type { Meta, StoryObj } from "@storybook/react";
import ThoughtProcess from "../ThoughtProcess";

const meta: Meta<typeof ThoughtProcess> = { title: "unDraw/ThoughtProcess", component: ThoughtProcess };

export default meta;
type Story = StoryObj<typeof ThoughtProcess>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
