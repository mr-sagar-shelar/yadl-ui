import type { Meta, StoryObj } from "@storybook/react";
import FilingSystem from "../FilingSystem";

const meta: Meta<typeof FilingSystem> = { title: "unDraw/FilingSystem", component: FilingSystem };

export default meta;
type Story = StoryObj<typeof FilingSystem>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
