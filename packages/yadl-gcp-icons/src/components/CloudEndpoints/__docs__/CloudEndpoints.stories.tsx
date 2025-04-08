import type { Meta, StoryObj } from "@storybook/react";
import CloudEndpoints from "../CloudEndpoints";

const meta: Meta<typeof CloudEndpoints> = { title: "GCP/CloudEndpoints", component: CloudEndpoints };

export default meta;
type Story = StoryObj<typeof CloudEndpoints>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
