import type { Meta, StoryObj } from "@storybook/react";
import DataLabeling from "../DataLabeling";

const meta: Meta<typeof DataLabeling> = { title: "GCP/DataLabeling", component: DataLabeling };

export default meta;
type Story = StoryObj<typeof DataLabeling>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
