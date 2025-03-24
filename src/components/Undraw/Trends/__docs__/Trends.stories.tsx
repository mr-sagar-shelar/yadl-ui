import type { Meta, StoryObj } from "@storybook/react";
import Trends from "../Trends";

const meta: Meta<typeof Trends> = { title: "unDraw/Trends", component: Trends };

export default meta;
type Story = StoryObj<typeof Trends>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
