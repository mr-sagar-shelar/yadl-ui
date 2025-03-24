import type { Meta, StoryObj } from "@storybook/react";
import DefenderIndustrialRobot from "../DefenderIndustrialRobot";

const meta: Meta<typeof DefenderIndustrialRobot> = { title: "Azure/Other/DefenderIndustrialRobot", component: DefenderIndustrialRobot };

export default meta;
type Story = StoryObj<typeof DefenderIndustrialRobot>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
