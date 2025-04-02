import type { Meta, StoryObj } from "@storybook/react";
import DefenderWebGuidingSystem from "../DefenderWebGuidingSystem";

const meta: Meta<typeof DefenderWebGuidingSystem> = { title: "Azure/Other/DefenderWebGuidingSystem", component: DefenderWebGuidingSystem };

export default meta;
type Story = StoryObj<typeof DefenderWebGuidingSystem>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
