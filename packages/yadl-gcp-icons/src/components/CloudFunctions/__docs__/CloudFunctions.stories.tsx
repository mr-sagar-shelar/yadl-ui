import type { Meta, StoryObj } from "@storybook/react";
import CloudFunctions from "../CloudFunctions";

const meta: Meta<typeof CloudFunctions> = { title: "GCP/CloudFunctions", component: CloudFunctions };

export default meta;
type Story = StoryObj<typeof CloudFunctions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
