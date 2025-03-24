import type { Meta, StoryObj } from "@storybook/react";
import DefenderPLC from "../DefenderPLC";

const meta: Meta<typeof DefenderPLC> = { title: "Azure/Other/DefenderPLC", component: DefenderPLC };

export default meta;
type Story = StoryObj<typeof DefenderPLC>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
