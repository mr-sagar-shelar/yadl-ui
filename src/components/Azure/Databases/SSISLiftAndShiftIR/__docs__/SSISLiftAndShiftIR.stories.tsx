import type { Meta, StoryObj } from "@storybook/react";
import SSISLiftAndShiftIR from "../SSISLiftAndShiftIR";

const meta: Meta<typeof SSISLiftAndShiftIR> = { title: "Azure/Databases/SSISLiftAndShiftIR", component: SSISLiftAndShiftIR };

export default meta;
type Story = StoryObj<typeof SSISLiftAndShiftIR>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
