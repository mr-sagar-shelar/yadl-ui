import type { Meta, StoryObj } from "@storybook/react";
import DataTransfer from "../DataTransfer";

const meta: Meta<typeof DataTransfer> = { title: "GCP/DataTransfer", component: DataTransfer };

export default meta;
type Story = StoryObj<typeof DataTransfer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
