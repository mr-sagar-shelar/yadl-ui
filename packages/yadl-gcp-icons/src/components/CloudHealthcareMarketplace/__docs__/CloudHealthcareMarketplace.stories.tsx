import type { Meta, StoryObj } from "@storybook/react";
import CloudHealthcareMarketplace from "../CloudHealthcareMarketplace";

const meta: Meta<typeof CloudHealthcareMarketplace> = { title: "GCP/CloudHealthcareMarketplace", component: CloudHealthcareMarketplace };

export default meta;
type Story = StoryObj<typeof CloudHealthcareMarketplace>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
