import type { Meta, StoryObj } from "@storybook/react";
import OnlinePopularity from "../OnlinePopularity";

const meta: Meta<typeof OnlinePopularity> = { title: "unDraw/OnlinePopularity", component: OnlinePopularity };

export default meta;
type Story = StoryObj<typeof OnlinePopularity>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
