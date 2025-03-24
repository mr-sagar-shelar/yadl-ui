import type { Meta, StoryObj } from "@storybook/react";
import BusinessDeal from "../BusinessDeal";

const meta: Meta<typeof BusinessDeal> = { title: "unDraw/BusinessDeal", component: BusinessDeal };

export default meta;
type Story = StoryObj<typeof BusinessDeal>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
