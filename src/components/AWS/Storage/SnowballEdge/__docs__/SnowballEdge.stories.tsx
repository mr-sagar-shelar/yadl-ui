import type { Meta, StoryObj } from "@storybook/react";
import SnowballEdge from "../SnowballEdge";

const meta: Meta<typeof SnowballEdge> = { title: "AWS/Storage/SnowballEdge", component: SnowballEdge };

export default meta;
type Story = StoryObj<typeof SnowballEdge>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
