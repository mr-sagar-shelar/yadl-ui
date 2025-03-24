import type { Meta, StoryObj } from "@storybook/react";
import ServiceCatalog from "../ServiceCatalog";

const meta: Meta<typeof ServiceCatalog> = { title: "AWS/ManagementGovernance/ServiceCatalog", component: ServiceCatalog };

export default meta;
type Story = StoryObj<typeof ServiceCatalog>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
