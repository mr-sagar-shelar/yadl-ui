import type { Meta, StoryObj } from "@storybook/react";
import AKSIstio from "../AKSIstio";

const meta: Meta<typeof AKSIstio> = { title: "Azure/Other/AKSIstio", component: AKSIstio };

export default meta;
type Story = StoryObj<typeof AKSIstio>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
