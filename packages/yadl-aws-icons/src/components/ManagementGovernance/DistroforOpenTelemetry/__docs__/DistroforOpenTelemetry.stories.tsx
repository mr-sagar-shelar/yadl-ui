import type { Meta, StoryObj } from "@storybook/react";
import DistroforOpenTelemetry from "../DistroforOpenTelemetry";

const meta: Meta<typeof DistroforOpenTelemetry> = { title: "AWS/ManagementGovernance/DistroforOpenTelemetry", component: DistroforOpenTelemetry };

export default meta;
type Story = StoryObj<typeof DistroforOpenTelemetry>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
