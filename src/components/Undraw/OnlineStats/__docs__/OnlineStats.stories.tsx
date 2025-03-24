import type { Meta, StoryObj } from "@storybook/react";
import OnlineStats from "../OnlineStats";

const meta: Meta<typeof OnlineStats> = { title: "unDraw/OnlineStats", component: OnlineStats };

export default meta;
type Story = StoryObj<typeof OnlineStats>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
