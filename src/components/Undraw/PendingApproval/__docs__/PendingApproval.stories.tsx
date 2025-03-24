import type { Meta, StoryObj } from "@storybook/react";
import PendingApproval from "../PendingApproval";

const meta: Meta<typeof PendingApproval> = { title: "unDraw/PendingApproval", component: PendingApproval };

export default meta;
type Story = StoryObj<typeof PendingApproval>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
