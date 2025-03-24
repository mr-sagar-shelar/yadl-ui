import type { Meta, StoryObj } from "@storybook/react";
import BusinessMan from "../BusinessMan";

const meta: Meta<typeof BusinessMan> = { title: "unDraw/BusinessMan", component: BusinessMan };

export default meta;
type Story = StoryObj<typeof BusinessMan>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
