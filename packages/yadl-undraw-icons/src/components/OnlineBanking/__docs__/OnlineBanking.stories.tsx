import type { Meta, StoryObj } from "@storybook/react";
import OnlineBanking from "../OnlineBanking";

const meta: Meta<typeof OnlineBanking> = { title: "unDraw/OnlineBanking", component: OnlineBanking };

export default meta;
type Story = StoryObj<typeof OnlineBanking>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
