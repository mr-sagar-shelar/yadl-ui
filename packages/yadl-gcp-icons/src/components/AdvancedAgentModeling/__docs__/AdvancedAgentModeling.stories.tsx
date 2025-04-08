import type { Meta, StoryObj } from "@storybook/react";
import AdvancedAgentModeling from "../AdvancedAgentModeling";

const meta: Meta<typeof AdvancedAgentModeling> = { title: "GCP/AdvancedAgentModeling", component: AdvancedAgentModeling };

export default meta;
type Story = StoryObj<typeof AdvancedAgentModeling>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
