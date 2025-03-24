import type { Meta, StoryObj } from "@storybook/react";
import CloudDataFusion from "../CloudDataFusion";

const meta: Meta<typeof CloudDataFusion> = { title: "GCP/CloudDataFusion", component: CloudDataFusion };

export default meta;
type Story = StoryObj<typeof CloudDataFusion>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
