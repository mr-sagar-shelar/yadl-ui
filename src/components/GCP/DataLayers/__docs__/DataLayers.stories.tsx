import type { Meta, StoryObj } from "@storybook/react";
import DataLayers from "../DataLayers";

const meta: Meta<typeof DataLayers> = { title: "GCP/DataLayers", component: DataLayers };

export default meta;
type Story = StoryObj<typeof DataLayers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
