import type { Meta, StoryObj } from "@storybook/react";
import DataTrends from "../DataTrends";

const meta: Meta<typeof DataTrends> = { title: "unDraw/DataTrends", component: DataTrends };

export default meta;
type Story = StoryObj<typeof DataTrends>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
