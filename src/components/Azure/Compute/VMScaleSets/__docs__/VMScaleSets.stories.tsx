import type { Meta, StoryObj } from "@storybook/react";
import VMScaleSets from "../VMScaleSets";

const meta: Meta<typeof VMScaleSets> = { title: "Azure/Compute/VMScaleSets", component: VMScaleSets };

export default meta;
type Story = StoryObj<typeof VMScaleSets>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
