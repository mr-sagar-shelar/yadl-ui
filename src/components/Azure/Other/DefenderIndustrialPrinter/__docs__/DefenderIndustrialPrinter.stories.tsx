import type { Meta, StoryObj } from "@storybook/react";
import DefenderIndustrialPrinter from "../DefenderIndustrialPrinter";

const meta: Meta<typeof DefenderIndustrialPrinter> = { title: "Azure/Other/DefenderIndustrialPrinter", component: DefenderIndustrialPrinter };

export default meta;
type Story = StoryObj<typeof DefenderIndustrialPrinter>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
