import type { Meta, StoryObj } from "@storybook/react";
import PortfolioFeedback from "../PortfolioFeedback";

const meta: Meta<typeof PortfolioFeedback> = { title: "unDraw/PortfolioFeedback", component: PortfolioFeedback };

export default meta;
type Story = StoryObj<typeof PortfolioFeedback>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
