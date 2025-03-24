import type { Meta, StoryObj } from "@storybook/react";
import PortfolioWebsite from "../PortfolioWebsite";

const meta: Meta<typeof PortfolioWebsite> = { title: "unDraw/PortfolioWebsite", component: PortfolioWebsite };

export default meta;
type Story = StoryObj<typeof PortfolioWebsite>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
