import type { Meta, StoryObj } from "@storybook/react";
import PieGraph from "../PieGraph";

const meta: Meta<typeof PieGraph> = { title: "unDraw/PieGraph", component: PieGraph };

export default meta;
type Story = StoryObj<typeof PieGraph>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
