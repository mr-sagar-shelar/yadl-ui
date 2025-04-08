import type { Meta, StoryObj } from "@storybook/react";
import DataCatalog from "../DataCatalog";

const meta: Meta<typeof DataCatalog> = { title: "GCP/DataCatalog", component: DataCatalog };

export default meta;
type Story = StoryObj<typeof DataCatalog>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
