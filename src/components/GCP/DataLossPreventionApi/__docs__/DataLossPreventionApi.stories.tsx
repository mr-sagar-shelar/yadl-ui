import type { Meta, StoryObj } from "@storybook/react";
import DataLossPreventionApi from "../DataLossPreventionApi";

const meta: Meta<typeof DataLossPreventionApi> = { title: "GCP/DataLossPreventionApi", component: DataLossPreventionApi };

export default meta;
type Story = StoryObj<typeof DataLossPreventionApi>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
