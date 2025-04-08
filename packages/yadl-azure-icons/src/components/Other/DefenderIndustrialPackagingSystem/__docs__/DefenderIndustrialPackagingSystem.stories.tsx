import type { Meta, StoryObj } from "@storybook/react";
import DefenderIndustrialPackagingSystem from "../DefenderIndustrialPackagingSystem";

const meta: Meta<typeof DefenderIndustrialPackagingSystem> = { title: "Azure/Other/DefenderIndustrialPackagingSystem", component: DefenderIndustrialPackagingSystem };

export default meta;
type Story = StoryObj<typeof DefenderIndustrialPackagingSystem>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
