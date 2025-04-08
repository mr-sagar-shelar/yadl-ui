import type { Meta, StoryObj } from "@storybook/react";
import GoogleCloudMarketplace from "../GoogleCloudMarketplace";

const meta: Meta<typeof GoogleCloudMarketplace> = { title: "GCP/GoogleCloudMarketplace", component: GoogleCloudMarketplace };

export default meta;
type Story = StoryObj<typeof GoogleCloudMarketplace>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
