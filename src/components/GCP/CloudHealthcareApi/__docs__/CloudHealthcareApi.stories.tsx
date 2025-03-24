import type { Meta, StoryObj } from "@storybook/react";
import CloudHealthcareApi from "../CloudHealthcareApi";

const meta: Meta<typeof CloudHealthcareApi> = { title: "GCP/CloudHealthcareApi", component: CloudHealthcareApi };

export default meta;
type Story = StoryObj<typeof CloudHealthcareApi>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
