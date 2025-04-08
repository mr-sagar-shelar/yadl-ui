import type { Meta, StoryObj } from "@storybook/react";
import PortfolioUpdate from "../PortfolioUpdate";

const meta: Meta<typeof PortfolioUpdate> = { title: "unDraw/PortfolioUpdate", component: PortfolioUpdate };

export default meta;
type Story = StoryObj<typeof PortfolioUpdate>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
