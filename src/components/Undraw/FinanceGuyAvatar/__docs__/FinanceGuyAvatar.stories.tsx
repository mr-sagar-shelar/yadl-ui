import type { Meta, StoryObj } from "@storybook/react";
import FinanceGuyAvatar from "../FinanceGuyAvatar";

const meta: Meta<typeof FinanceGuyAvatar> = { title: "unDraw/FinanceGuyAvatar", component: FinanceGuyAvatar };

export default meta;
type Story = StoryObj<typeof FinanceGuyAvatar>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
