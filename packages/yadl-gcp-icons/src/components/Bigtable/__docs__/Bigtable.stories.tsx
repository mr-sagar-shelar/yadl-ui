import type { Meta, StoryObj } from "@storybook/react";
import Bigtable from "../Bigtable";

const meta: Meta<typeof Bigtable> = { title: "GCP/Bigtable", component: Bigtable };

export default meta;
type Story = StoryObj<typeof Bigtable>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
