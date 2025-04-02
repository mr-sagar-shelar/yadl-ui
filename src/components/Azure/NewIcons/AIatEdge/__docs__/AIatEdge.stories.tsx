import type { Meta, StoryObj } from "@storybook/react";
import AIatEdge from "../AIatEdge";

const meta: Meta<typeof AIatEdge> = { title: "Azure/NewIcons/AIatEdge", component: AIatEdge };

export default meta;
type Story = StoryObj<typeof AIatEdge>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
