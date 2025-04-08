import type { Meta, StoryObj } from "@storybook/react";
import FinancialData from "../FinancialData";

const meta: Meta<typeof FinancialData> = { title: "unDraw/FinancialData", component: FinancialData };

export default meta;
type Story = StoryObj<typeof FinancialData>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
