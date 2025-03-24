import type { Meta, StoryObj } from "@storybook/react";
import ApplicationInsights from "../ApplicationInsights";

const meta: Meta<typeof ApplicationInsights> = { title: "Azure/Devops/ApplicationInsights", component: ApplicationInsights };

export default meta;
type Story = StoryObj<typeof ApplicationInsights>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
