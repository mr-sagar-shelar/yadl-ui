import type { Meta, StoryObj } from "@storybook/react";
import ChangeAnalysis from "../ChangeAnalysis";

const meta: Meta<typeof ChangeAnalysis> = { title: "Azure/Monitor/ChangeAnalysis", component: ChangeAnalysis };

export default meta;
type Story = StoryObj<typeof ChangeAnalysis>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
