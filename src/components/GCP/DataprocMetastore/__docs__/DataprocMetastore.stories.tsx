import type { Meta, StoryObj } from "@storybook/react";
import DataprocMetastore from "../DataprocMetastore";

const meta: Meta<typeof DataprocMetastore> = { title: "GCP/DataprocMetastore", component: DataprocMetastore };

export default meta;
type Story = StoryObj<typeof DataprocMetastore>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
