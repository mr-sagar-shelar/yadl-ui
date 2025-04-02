import type { Meta, StoryObj } from "@storybook/react";
import ATMMultistack from "../ATMMultistack";

const meta: Meta<typeof ATMMultistack> = { title: "Azure/Networking/ATMMultistack", component: ATMMultistack };

export default meta;
type Story = StoryObj<typeof ATMMultistack>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
