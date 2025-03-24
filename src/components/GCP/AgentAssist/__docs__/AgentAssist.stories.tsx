import type { Meta, StoryObj } from "@storybook/react";
import AgentAssist from "../AgentAssist";

const meta: Meta<typeof AgentAssist> = { title: "GCP/AgentAssist", component: AgentAssist };

export default meta;
type Story = StoryObj<typeof AgentAssist>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
