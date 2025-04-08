import type { Meta, StoryObj } from "@storybook/react";
import CloudLogging from "../CloudLogging";

const meta: Meta<typeof CloudLogging> = { title: "GCP/CloudLogging", component: CloudLogging };

export default meta;
type Story = StoryObj<typeof CloudLogging>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
