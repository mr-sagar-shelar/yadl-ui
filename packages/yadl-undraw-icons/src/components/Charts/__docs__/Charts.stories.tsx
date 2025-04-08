import type { Meta, StoryObj } from "@storybook/react";
import Charts from "../Charts";

const meta: Meta<typeof Charts> = { title: "unDraw/Charts", component: Charts };

export default meta;
type Story = StoryObj<typeof Charts>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
