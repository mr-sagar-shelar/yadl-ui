import type { Meta, StoryObj } from "@storybook/react";
import HealthcareNlpApi from "../HealthcareNlpApi";

const meta: Meta<typeof HealthcareNlpApi> = { title: "GCP/HealthcareNlpApi", component: HealthcareNlpApi };

export default meta;
type Story = StoryObj<typeof HealthcareNlpApi>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
