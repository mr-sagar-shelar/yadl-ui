import type { Meta, StoryObj } from "@storybook/react";
import MonthlyUsers from "../MonthlyUsers";

const meta: Meta<typeof MonthlyUsers> = { title: "unDraw/MonthlyUsers", component: MonthlyUsers };

export default meta;
type Story = StoryObj<typeof MonthlyUsers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
