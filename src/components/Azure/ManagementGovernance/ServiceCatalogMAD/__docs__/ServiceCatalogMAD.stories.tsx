import type { Meta, StoryObj } from "@storybook/react";
import ServiceCatalogMAD from "../ServiceCatalogMAD";

const meta: Meta<typeof ServiceCatalogMAD> = { title: "Azure/ManagementGovernance/ServiceCatalogMAD", component: ServiceCatalogMAD };

export default meta;
type Story = StoryObj<typeof ServiceCatalogMAD>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
