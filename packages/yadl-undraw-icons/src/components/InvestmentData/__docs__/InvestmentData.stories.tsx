import type { Meta, StoryObj } from "@storybook/react";
import InvestmentData from "../InvestmentData";

const meta: Meta<typeof InvestmentData> = { title: "unDraw/InvestmentData", component: InvestmentData };

export default meta;
type Story = StoryObj<typeof InvestmentData>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
