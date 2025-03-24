import type { Meta, StoryObj } from "@storybook/react";
import PieChart from "../PieChart";

const meta: Meta<typeof PieChart> = { title: "unDraw/PieChart", component: PieChart };

export default meta;
type Story = StoryObj<typeof PieChart>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
