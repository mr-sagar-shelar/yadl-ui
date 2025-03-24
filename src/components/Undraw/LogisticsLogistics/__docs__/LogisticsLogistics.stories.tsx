import type { Meta, StoryObj } from "@storybook/react";
import LogisticsLogistics from "../LogisticsLogistics";

const meta: Meta<typeof LogisticsLogistics> = { title: "unDraw/LogisticsLogistics", component: LogisticsLogistics };

export default meta;
type Story = StoryObj<typeof LogisticsLogistics>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
