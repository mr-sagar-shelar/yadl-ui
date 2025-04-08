import type { Meta, StoryObj } from "@storybook/react";
import BusinessPlan from "../BusinessPlan";

const meta: Meta<typeof BusinessPlan> = { title: "unDraw/BusinessPlan", component: BusinessPlan };

export default meta;
type Story = StoryObj<typeof BusinessPlan>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
