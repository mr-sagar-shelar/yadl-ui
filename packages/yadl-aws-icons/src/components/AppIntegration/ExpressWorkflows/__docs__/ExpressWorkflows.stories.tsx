import type { Meta, StoryObj } from "@storybook/react";
import ExpressWorkflows from "../ExpressWorkflows";

const meta: Meta<typeof ExpressWorkflows> = { title: "AWS/AppIntegration/ExpressWorkflows", component: ExpressWorkflows };

export default meta;
type Story = StoryObj<typeof ExpressWorkflows>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
