import type { Meta, StoryObj } from "@storybook/react";
import Mindfulness from "../Mindfulness";

const meta: Meta<typeof Mindfulness> = { title: "unDraw/Mindfulness", component: Mindfulness };

export default meta;
type Story = StoryObj<typeof Mindfulness>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
