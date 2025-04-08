import type { Meta, StoryObj } from "@storybook/react";
import EMR from "../EMR";

const meta: Meta<typeof EMR> = { title: "AWS/Analytics/EMR", component: EMR };

export default meta;
type Story = StoryObj<typeof EMR>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
