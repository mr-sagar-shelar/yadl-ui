import type { Meta, StoryObj } from "@storybook/react";
import AutoScale from "../AutoScale";

const meta: Meta<typeof AutoScale> = { title: "Azure/Monitor/AutoScale", component: AutoScale };

export default meta;
type Story = StoryObj<typeof AutoScale>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
