import type { Meta, StoryObj } from "@storybook/react";
import DefenderIndustrialScaleSystem from "../DefenderIndustrialScaleSystem";

const meta: Meta<typeof DefenderIndustrialScaleSystem> = { title: "Azure/Other/DefenderIndustrialScaleSystem", component: DefenderIndustrialScaleSystem };

export default meta;
type Story = StoryObj<typeof DefenderIndustrialScaleSystem>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
