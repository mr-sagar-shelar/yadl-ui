import type { Meta, StoryObj } from "@storybook/react";
import StackHCIPremium from "../StackHCIPremium";

const meta: Meta<typeof StackHCIPremium> = { title: "Azure/Iot/StackHCIPremium", component: StackHCIPremium };

export default meta;
type Story = StoryObj<typeof StackHCIPremium>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
