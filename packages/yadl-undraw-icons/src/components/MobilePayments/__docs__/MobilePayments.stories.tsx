import type { Meta, StoryObj } from "@storybook/react";
import MobilePayments from "../MobilePayments";

const meta: Meta<typeof MobilePayments> = { title: "unDraw/MobilePayments", component: MobilePayments };

export default meta;
type Story = StoryObj<typeof MobilePayments>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
