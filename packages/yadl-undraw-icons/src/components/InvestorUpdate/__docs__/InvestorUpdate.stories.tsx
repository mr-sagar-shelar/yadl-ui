import type { Meta, StoryObj } from "@storybook/react";
import InvestorUpdate from "../InvestorUpdate";

const meta: Meta<typeof InvestorUpdate> = { title: "unDraw/InvestorUpdate", component: InvestorUpdate };

export default meta;
type Story = StoryObj<typeof InvestorUpdate>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
