import type { Meta, StoryObj } from "@storybook/react";
import MobilePay from "../MobilePay";

const meta: Meta<typeof MobilePay> = { title: "unDraw/MobilePay", component: MobilePay };

export default meta;
type Story = StoryObj<typeof MobilePay>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
