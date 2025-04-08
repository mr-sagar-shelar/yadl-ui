import type { Meta, StoryObj } from "@storybook/react";
import HDInsightClusters from "../HDInsightClusters";

const meta: Meta<typeof HDInsightClusters> = { title: "Azure/Analytics/HDInsightClusters", component: HDInsightClusters };

export default meta;
type Story = StoryObj<typeof HDInsightClusters>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
