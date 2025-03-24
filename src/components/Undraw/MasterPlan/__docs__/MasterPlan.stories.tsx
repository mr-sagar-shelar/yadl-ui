import type { Meta, StoryObj } from "@storybook/react";
import MasterPlan from "../MasterPlan";

const meta: Meta<typeof MasterPlan> = { title: "unDraw/MasterPlan", component: MasterPlan };

export default meta;
type Story = StoryObj<typeof MasterPlan>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
