import type { Meta, StoryObj } from "@storybook/react";
import TrendyInterface from "../TrendyInterface";

const meta: Meta<typeof TrendyInterface> = { title: "unDraw/TrendyInterface", component: TrendyInterface };

export default meta;
type Story = StoryObj<typeof TrendyInterface>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
